import { useEffect } from 'react'
import {
  MainDiscover,
  MainSteps,
  MainThisWeeks,
  MainPlantsInSale,
} from '../components'

export default function Home() {
  useEffect(() => {
    document.title = 'Home'
  })

  return (
    <main className="flex flex-col items-center pt-40 bg-wisper">
      <MainDiscover />
      <MainSteps />
      <MainThisWeeks />
      <MainPlantsInSale />
    </main>
  )
}
