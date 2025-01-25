import { A } from "@solidjs/router"
import Card from "~/components/ui/Card"
import Separator from "~/components/ui/Separator"
export default function Home() {
  interface Section {
    url: string
    title: string
    description: string
  }

  const sections = [
    {
      url: "/portfolio",
      title: "Portfolio",
      description: `Collection of things I've worked on over the years`,
    },
    {
      url: "/blog",
      title: "Blog",
      description: `Articles about things that interest me, or things I've built I like to rant about`,
    },
  ]
  return (
    <main class="mx-auto container text-white">
      <section class="hero">
        <h1 class="max-6-xs text-6xl font-mono mt-8">welcome</h1>
        <h2 class="font-mono text-xl">
          I make things move in the browser, sometimes even outside of it.
        </h2>
      </section>

      <Separator margin="lg" />

      <section class="spotlight grid grid-cols-1 md:grid-cols-2 gap-3">
        {sections.map((section: Section) => (
          <Card>
            <A href={section.url} class="card-internal font-mono">
              <h3 class="text-2xl font-bold">{section.title}</h3>
              <Separator margin="sm" />
              <p>{section.description}</p>
            </A>
          </Card>
        ))}
      </section>
    </main>
  )
}
