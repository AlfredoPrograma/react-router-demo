import { useParams } from "react-router"

export function AboutPage() {
  const { session } = useParams()

  return (
    <h1>About page: { session }</h1>
  )
}