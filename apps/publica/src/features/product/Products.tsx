import { useEffect, useState } from 'react'
import { Link } from 'react-router'
import type { IProduct } from '@mi-app/types'
import { getProducts } from '../../api/product.api'
import Product from './Product'

const Products = () => {
  const [products, setProducts] = useState<IProduct[]>([])

  useEffect(() => {
    getProducts().then((data) => setProducts(data))
  }, [])

  return (
    <>
      <section>
        <div className="container">
          <div className="text-center py-5">
            <div className="row py-lg-5">
              <div className="col-lg-6 col-md-8 mx-auto">
                <h1 className="fw-light">Productos</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="album py-2">
        <div className="container backgroundElements">
          <Link
            className="btn btn-md btn-outline-secondary rounded-pill ms-4 mt-2 mb-3"
            to="/"
          >
            <i className="bi-svg bi-arrow-left fs-4 me-2"></i>
            Volver
          </Link>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {products.map((p) => (
              <Product key={p.id} info={p} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Products

