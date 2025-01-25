import { JSX } from "solid-js"

export default function Card({ children }: { children: JSX.Element }) {
  return (
    <div class="border border-white/10 p-4 shadow-lg rounded-md hover:border-white/50 cursor-pointer hover:bg-white/5 transition-all">
      {children}
    </div>
  )
}
