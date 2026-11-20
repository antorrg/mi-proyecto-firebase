import { Link } from 'react-router'
import type { IFrontPage } from '@mi-app/types'
import style from './frontPage.module.css'

type FrontPageProps = {
  data: IFrontPage | null
}

export default function FrontPage({ data }: FrontPageProps) {
  return (
    <section className={style.backgroundSection}>
      <div className="container-caption">
        <div className="caption-title ms-5">
          <h1>{data?.title ?? 'Cargando...'}</h1>
          <p className="lead" style={{ whiteSpace: 'pre-line' }}>
            {data?.description}
          </p>
          <p className="lead">
            <Link className="btn btn-lg btn-dark fw-bold" to="/detalles">
              Ver productos
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}
