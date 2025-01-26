import { A, createAsync, json, query } from '@solidjs/router'
import { createSignal, For, createMemo } from 'solid-js'
import MainContainer from '~/components/ui/MainContainer'
import Card from '~/components/ui/Card'
import Separator from '~/components/ui/Separator'
import HeartIcon from '~/components/ui/icons/HeartIcon'
import SearchInput from '~/components/ui/SearchInput'
import { DevArticle } from '~/types/blog'

const getDevArticles = query(async () => {
  'use server'
  return json(
    await fetch('https://dev.to/api/articles?username=alextana').then((res) =>
      res.json(),
    ),
  )
}, 'articles')

export const route = {
  preload: () => getDevArticles(),
}

export default function Blog() {
  const articles = createAsync(() => getDevArticles())
  const [searchTerm, setSearchTerm] = createSignal('')

  const filteredArticles = createMemo(() => {
    const term = searchTerm().toLowerCase()
    if (!term || !articles()) return articles()

    return articles()?.filter(
      (article: DevArticle) =>
        article.title.toLowerCase().includes(term) ||
        article.description?.toLowerCase().includes(term) ||
        article.tag_list?.some((tag: string) =>
          tag.toLowerCase().includes(term),
        ),
    )
  })

  const handleFiltering = (e: InputEvent) => {
    const target = e.target as HTMLInputElement
    setSearchTerm(target.value)
  }

  return (
    <MainContainer>
      <Separator margin="lg" />

      <section class="text-white align-center items-center font-mono max-w-2xl">
        <h1 class="text-4xl">Blog</h1>

        <Separator margin="md" />

        <p>
          Here you'll find some of my articles about the tech that I use and
          love, some of these will link to external sites.
        </p>
        <SearchInput onInput={handleFiltering} />
      </section>

      <Separator margin="lg" />

      <div class="grid grid-cols-1 font-mono md:grid-cols-3 gap-4 text-white">
        <For each={filteredArticles()}>
          {(article) => (
            <A href={article.url} target="_blank">
              <Card>
                <img src={article.cover_image}></img>

                <Separator margin="md" />

                <h2 class="text-xl font-bold">{article.title}</h2>

                <Separator margin="md" />
                <p class="text-sm text-gray-400">{article.description}</p>
                <Separator margin="md" />

                {article.readable_publish_date && (
                  <div class="flex items-center justify-between">
                    {article.positive_reactions_count && (
                      <div class="flex items-center gap-2">
                        <HeartIcon className="w-4 h-4" />
                        <p class="text-sm text-gray-400">
                          {article.positive_reactions_count}
                        </p>
                      </div>
                    )}
                    <p class="text-sm text-gray-400">
                      {article.readable_publish_date}
                    </p>
                  </div>
                )}

                <Separator margin="md" />

                {article.tag_list && article.tag_list.length && (
                  <div class="flex flex-wrap gap-2">
                    {article.tag_list.map((tag: string) => (
                      <span class="text-sm text-gray-400 px-4 py-2 border border-gray-400 rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </Card>
            </A>
          )}
        </For>
      </div>
    </MainContainer>
  )
}
