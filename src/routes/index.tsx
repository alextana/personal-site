import { A } from '@solidjs/router'
import Card from '~/components/ui/Card'
import Separator from '~/components/ui/Separator'
import PortfolioIcon from '~/components/ui/icons/PortfolioIcon'
import BlogIcon from '~/components/ui/icons/BlogIcon'
import HeartIcon from '~/components/ui/icons/HeartIcon'
import { Component } from 'solid-js'
import MainContainer from '~/components/ui/MainContainer'
export default function Home() {
  interface Section {
    url: string
    title: string
    description: string
    highlight?: boolean
    icon: Component<{ className: string }>
  }

  const sections = [
    {
      url: '/portfolio',
      title: 'Portfolio',
      description: `Collection of things I've worked on over the years`,
      icon: PortfolioIcon,
    },
    {
      url: '/bored',
      title: 'Bored?',
      description: `If you're bored you know where to click`,
      highlight: true,
      icon: HeartIcon,
    },
    {
      url: '/blog',
      title: 'Blog',
      description: `Articles about things that interest me, or things I've built I like to rant about`,
      icon: BlogIcon,
    },
  ]
  return (
    <main class="text-white min-h-[80vh] grid place-content-center bg-[radial-gradient(ellipse_at_top_right,rgba(132,204,22,0.05),transparent)]">
      <MainContainer>
        <section class="hero">
          <h1 class="max-6-xs text-6xl font-mono">welcome</h1>
          <Separator margin="sm" />
          <p class="font-mono text-lg max-w-3xl">
            I'm a Front-end engineer based in Brighton, UK. I have experience
            using most modern front-end frameworks and technologies.
          </p>
          <Separator margin="sm" />
          <p class="font-mono text-lg max-w-3xl">
            Currently I'm working as a Front-end engineer at{' '}
            <A
              href="https://www.amiqus.co"
              class="text-lime-500"
              target="_blank"
            >
              Amiqus
            </A>
          </p>

          <Separator margin="lg" />
          <p class="font-mono text-xl max-w-3xl">
            If you're here for my portfolio just click the button below.
          </p>
        </section>

        <Separator margin="lg" />

        <section class="spotlight grid grid-cols-1 md:grid-cols-3 gap-3">
          {sections.map((section: Section) => (
            <Card highlight={section.highlight}>
              <A href={section.url} class="card-internal font-mono">
                <div class="flex items-center gap-3">
                  <section.icon className="w-6 h-6" />
                  <h3 class="text-2xl font-bold">{section.title}</h3>
                </div>
                <Separator margin="sm" />
                <p>{section.description}</p>
              </A>
            </Card>
          ))}
        </section>
      </MainContainer>
    </main>
  )
}
