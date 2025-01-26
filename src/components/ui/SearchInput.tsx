import { Component } from 'solid-js'

interface SearchInputProps {
  placeholder?: string
  class?: string
  onInput?: (e: InputEvent) => void
}

const SearchInput: Component<SearchInputProps> = (props) => {
  return (
    <div class="relative flex items-center gap-3">
      <input
        type="text"
        placeholder={props.placeholder || 'Search'}
        class={`w-max pl-10 pr-4 py-2 mt-4 text-white bg-transparent border rounded-md border-gray-600 focus:outline-none focus:border-lime-500 transition-colors placeholder:text-gray-500 ${props.class || ''}`}
        onInput={props.onInput}
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5 absolute left-3 top-[1.65rem] text-gray-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </div>
  )
}

export default SearchInput
