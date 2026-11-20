const Contact = () => {
  return (
    <main>
      <div className="backgroundPages" style={{ minHeight: '100vh' }}>
        <div className="coverBackPages">
          <div className="container-sm modal-content textFormPagesContainer backgroundFormColor rounded-2 shadow">
            <div className="container mt-4">
              <h1>Contacto:</h1>
              <form id="sendEmail">
                {/* Honeypot anti-spam (invisible para usuarios reales) */}
                <div
                  style={{
                    position: 'absolute',
                    left: '-9999px',
                    width: '1px',
                    height: '1px',
                    overflow: 'hidden'
                  }}
                  aria-hidden="true"
                >
                  <label htmlFor="website">Sitio web (opcional):</label>
                  <input
                    type="text"
                    id="website"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>
                <div className="row">
                  <div className="col-md-12 mb-3">
                    <label className="form-label" htmlFor="email">
                      Su email:
                    </label>
                    <input
                      className="form-control"
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Su email..."
                      required
                    />
                    <p id="errorEmail" className="error text-danger"></p>
                  </div>
                  <div className="col-md-12">
                    <label className="form-label" htmlFor="issue">
                      Asunto:
                    </label>
                    <input
                      className="form-control"
                      name="issue"
                      id="issue"
                      type="text"
                      placeholder="Asunto..."
                      required
                    />
                    <p id="errorIssue" className="error text-danger"></p>
                  </div>
                  <div className="col-md-12">
                    <label className="form-label" htmlFor="message">
                      Mensaje:
                    </label>
                    <textarea
                      className="form-control"
                      name="message"
                      id="message"
                      placeholder="Su mensaje..."
                      required
                    ></textarea>
                    <p id="errorMessage" className="error text-danger"></p>
                  </div>
                </div>
                <div className="d-flex flex-row justify-content-between align-items-center">
                  <button
                    className="btn btn-sm btn-primary"
                    id="submitButton"
                    type="submit"
                    disabled
                  >
                    Enviar
                  </button>
                  <button
                    className="btn btn-sm btn-outline-secondary mt-3 me-3 mb-4"
                    id="cancelButton"
                    type="button"
                  >
                    Cancelar
                  </button>
                </div>
              </form>
              <a
                className="btn btn-sm btn-outline-success mt-3 me-3 mb-4 mx-auto w-15"
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bi-svg bi-whatsapp"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Contact
