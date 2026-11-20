import { Link } from 'react-router'
import type { ProductsPreview } from '@mi-app/types'

type MarketingProps = {
  products: ProductsPreview[]
}

const Marketing = ({ products }: MarketingProps) => {
  const activeProducts = products.filter((p) => p.enabled)

  return (
    <section className="container marketing mb-3">
      <h2 className="h2 fw-normal mb-2 mt-2">Productos</h2>
      <div className="row g-3">
        {activeProducts.map((inf) => (
          <div key={inf.id} className="col-12 col-sm-6 col-lg-4">
            <div className="backgroundElements h-100">
              <img
                src={inf.logo}
                className="bd-placeholder-img rounded-circle mt-2 mb-1"
                width="70"
                height="70"
                alt={inf.title}
              />
              <h4 className="h4 fw-normal">{inf.title}</h4>
              <p className="fw-normal">{inf.shortDescription}</p>
              <p>
                <Link className="btn btn-sm btn-outline-primary" to={`/detalles/${inf.id}`}>
                  Ver detalles &raquo;
                </Link>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Marketing
