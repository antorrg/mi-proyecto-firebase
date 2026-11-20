import { useEffect, useState } from 'react'
import type { IAbout } from '@mi-app/types'
import { getAbout } from '../../api/about.api'

const About = () => {
  const [data, setData] = useState<IAbout | null>(null)

  useEffect(() => {
    getAbout().then((res) => setData(res))
  }, [])

  return (
    <main>
      <div className="backgroundPages" style={{ minHeight: '100vh' }}>
        <div className="coverBackPages">
          <div className="container-sm modal-content textFormPagesContainer backgroundFormColor rounded-2 shadow">
            <div className="container mt-4">
              <div className="row">
                <h1>{data?.title ?? 'Acerca de'}</h1>
                {data?.picture && (
                  <img
                    className="d-block mx-auto mb-4 img-fluid"
                    src={data.picture}
                    alt={data.title}
                  />
                )}
                <div
                  className="text-muted rich-text-content"
                  dangerouslySetInnerHTML={{ __html: data?.text ?? '' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default About
