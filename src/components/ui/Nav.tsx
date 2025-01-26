import { A } from '@solidjs/router'

export default function Nav() {
  const logoText = 'alextana.co.uk'

  return (
    <nav class="w-full py-3 px-4 md:px-0 text-white border-b border-b-white/10">
      <div class="container mx-auto font-mono flex items-center justify-between">
        <A
          href="/"
          class="text-md md:text-2xl logo group"
          aria-label={logoText}
        >
          <span aria-hidden="true">
            {logoText.split('').map((letter, index) => (
              <span
                class="inline-block transition-colors duration-200 group-hover:text-lime-400"
                style={{ 'transition-delay': `${index * 50}ms` }}
              >
                {letter}
              </span>
            ))}
          </span>
        </A>
        <div>Something else</div>
      </div>
    </nav>
  )
}
