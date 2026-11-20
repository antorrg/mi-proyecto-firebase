
export default function Footer(){
  return(
    <div className="container-fluid footer mt-auto py-3 bg-body-tertiary" style={{ maxHeight:'30vh' }}>
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <a href="/" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">&copy; antorrg-software</a>
          <span className="mb-3 mb-md-0 text-body-secondary">2026</span>
        </div>
        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3">
            <a className="text-danger" href="#">
              <i className="bi-svg bi-youtube me-1"></i> You Tube
            </a>
          </li>
          <li className="ms-3">
            <a className="text" href="#">
              <i className="bi-svg bi-twitter-x me-1 text"></i> (ex twitter)
            </a>
          </li>
          <li className="ms-3">
            <a className="text-primary" href="https://www.linkedin.com/in/antonio-ricardo-rodriguez-gramajo-9b4342277/" target="blank">
              <i className="bi-svg bi-linkedin me-1"></i> Linkedin
            </a>
          </li>
          <li className="ms-3">
            <a className="text-primary" href="#">
              <i className="bi-svg bi-facebook me-1"></i> Facebook
            </a>
          </li>
        </ul>
      </footer>
    </div>
  )
}