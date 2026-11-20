import { useEffect, useState } from 'react'
import type { IFrontPage } from '@mi-app/types'
import { getFrontPage } from '../api/frontPage.api'
import FrontPage from '../features/frontPage/FrontPage'
import Marketing from '../features/frontPage/Marketing'

export default function Home() {
  const [data, setData] = useState<IFrontPage | null>(null)

  useEffect(() => {
    getFrontPage().then((res) => setData(res))
  }, [])

  return (
    <>
      <FrontPage data={data} />
      <Marketing products={data?.productsPreview ?? []} />
    </>
  )
}
