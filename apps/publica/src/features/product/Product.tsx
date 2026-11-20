import { Link } from 'react-router'
import type { IProduct } from '@mi-app/types'

type ProductProps = Pick<IProduct, 'id' | 'picture' | 'title'>

const Product = ({ info }: { info: ProductProps }) => {
  const { id, title, picture } = info
  return (
    <div className="col mb-3">
      <div className="card shadow-sm">
        <img 
          className="card-img-top" 
          src={picture}
          alt="Card image" 
          style={{ maxWidth: '25rem', height:'15rem', objectFit:'cover', objectPosition:'center' }}
        />
        <div className="card-body">
          <p className="h5 card-text">{title}</p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <Link 
                className="btn btn-sm btn-outline-secondary" 
                to={`/detalles/${id}`}
              >Ver más
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product
/*
      <%
        const chunk = (arr, size) => {
          return arr.reduce((acc, _, i) => {
            if (i % size) {
              acc[acc.length - 1].push(arr[i]);
            } else {
              acc.push([arr[i]]);
            }
            return acc;
          }, []);
        };
        const rows = chunk(products, 3);
      %>

      <% rows.forEach(row => { %>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          <% row.forEach(info => { %>
            <div className="col mb-3">
              <div className="card shadow-sm">
                <img className="card-img-top" src="<%= info.picture %>" alt="Card image" style="max-width: 25rem; height:15rem; object-fit:cover; object-position:center;">
                <div className="card-body">
                  <p className="h5 card-text"><%= info.title %></p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <a className="btn btn-sm btn-outline-secondary" href="/detalles/<%= info.id %>">Ver más</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          <% }) %>
        </div>
      <% }) %>*/