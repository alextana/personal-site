import { JSX } from 'solid-js'

export default function MainContainer({ children }: { children: JSX.Element }) {
  return <div class="container mx-auto px-4 md:px-0">{children}</div>
}
