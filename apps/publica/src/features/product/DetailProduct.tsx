import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router'
import type { IProduct } from '@mi-app/types'
import { getProductById } from '../../api/product.api'

const DetailProduct = () => {
  const { id } = useParams<{ id: string }>()
  const [info, setInfo] = useState<IProduct | null>(null)

  useEffect(() => {
    if (id) {
      getProductById(id).then((data) => setInfo(data))
    }
  }, [id])

  if (!info) {
    return (
      <main className="py-5 container text-center">
        <p className="lead">Cargando producto...</p>
      </main>
    )
  }

  return (
    <main>
      <section className="py-5 container backgroundElements">
        <Link
          className="btn btn-md btn-outline-secondary rounded-pill mt-3 mb-3 align-items-start"
          to="/detalles"
        >
          <i className="bi-svg bi-arrow-left fs-4 me-3"></i>Volver
        </Link>
        <div className="text-center mt-0">
          <div className="row py-lg-5">
            <div className="col-lg-8 col-md-10 mx-auto">
              <h1 className="fw-light">{info.title}</h1>
              <img className="img-fluid mb-3" src={info.picture} alt={info.title} />
              <p className="lead text-muted">{info.description}</p>
              <p>
                {info.isActive && info.url ? (
                  <a
                    className="btn btn-sm btn-primary my-2 me-2"
                    href={info.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Ir al sitio web<i className="bi-svg bi-arrow-right fs-4 ms-1"></i>
                  </a>
                ) : (
                  <Link
                    className="btn btn-sm btn-primary my-2 me-2"
                    to={`/videos/${info.id}`}
                  >
                    Ver video<i className="bi-svg bi-arrow-right fs-4 ms-1"></i>
                  </Link>
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="album py-5">
        <div className="container backgroundElements">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {info.items
              ?.filter((item) => item.enabled)
              .map((item) => (
                <div key={item.id} className="col mt-2 mb-4">
                  <div className="card shadow-sm">
                    <img
                      className="card-img-top"
                      src={item.picture}
                      alt="Card image"
                      style={{
                        maxWidth: '25rem',
                        height: '15rem',
                        objectFit: 'cover',
                        objectPosition: 'center'
                      }}
                    />
                    <div className="card-body">
                      <p className="card-text text-truncate">{item.text}</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                          <Link
                            className="btn btn-sm btn-outline-secondary"
                            to={`/detalles/item/${item.id}`}
                          >
                            Ver más
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </main>
  )
}

export default DetailProduct
