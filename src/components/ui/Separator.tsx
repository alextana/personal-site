export default function Separator({ margin }: { margin: string }) {
  const getComputedStyle = (margin: string): string => {
    switch (margin) {
      case "sm":
        return "my-2"
      case "md":
        return "my-4"
      case "lg":
        return "my-8"
    }

    return ""
  }
  return <div class={`${getComputedStyle(margin)}`} />
}
