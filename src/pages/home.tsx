import { useParams } from "react-router"

export function HomePage() {
  const { session }  = useParams()

  return (
    <h1>Home page: {session}</h1>
  )
}