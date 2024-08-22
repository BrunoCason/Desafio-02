import { useEffect } from 'react'
import { ErrorMessage } from '../components'

export default function ErrorPage() {
  useEffect(() => {
    document.title = 'Page not Found'
  })
  
  return (
    <>
      <ErrorMessage />
    </>
  )
}
