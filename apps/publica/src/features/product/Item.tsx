import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router'
import type { Item as IItem } from '@mi-app/types'
import { getItemById } from '../../api/item.api'

const Item = () => {
  const { id } = useParams<{ id: string }>()
  const [variant, setVariant] = useState<IItem | null>(null)

  useEffect(() => {
    if (id) {
      getItemById(id).then((data) => setVariant(data))
    }
  }, [id])

  if (!variant) {
    return (
      <main className="py-5 container text-center">
        <p className="lead">Cargando detalle...</p>
      </main>
    )
  }

  return (
    <main>
      <div className="container-sm">
        <div className="modal modal-tour position-static d-block modal-custom py-5">
          <div className="modal-dialog modal-dialog-centered modal-xl">
            <div className="modal-content backgroundElements">
              <div style={{ alignItems: 'start', textAlign: 'start' }}>
                <Link
                  className="btn btn-md btn-outline-secondary rounded-pill ms-2 mt-3 mx-auto w-15"
                  to={`/detalles/${variant.productId}`}
                >
                  <i className="bi-svg bi-arrow-left fs-4 me-3"></i>Volver
                </Link>
              </div>
              <div className="modal-body p-5 text-center">
                <img
                  className="d-block mx-auto mb-4 img-fluid"
                  src={variant.picture}
                  alt="image not found"
                />
                <div className="text-muted">{variant.text}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Item
