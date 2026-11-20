import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router'
import type { ProductVideo } from '@mi-app/types'
import { getVideosByProductId } from '../../api/video.api'

const Videos = () => {
  const { id } = useParams<{ id: string }>()
  const [videosData, setVideosData] = useState<ProductVideo | null>(null)

  useEffect(() => {
    if (id) {
      getVideosByProductId(id).then((data) => setVideosData(data))
    }
  }, [id])

  return (
    <div className="album py-5">
      <div className="container backgroundElements">
        <Link
          to={`/detalles/${videosData?.productId ?? id ?? ''}`}
          className="btn btn-md btn-outline-secondary rounded-pill mt-3 mb-3 align-items-start"
        >
          <i className="bi-svg bi-arrow-left fs-4 me-1"></i>Volver
        </Link>

        {videosData ? (
          <>
            <h2 className="mt-2 mb-4 text-center">{videosData.title}</h2>
            <div className="d-flex flex-row justify-content-center align-items-center lead g-4">
              <h3 className="mb-4 me-3">Descripcion de:</h3>
              <p>{videosData.productTitle}</p>
            </div>
            <p className="lead text-center">{videosData.description}</p>

            {videosData.videos.length > 0 ? (
              <div className="row justify-content-center g-4">
                {videosData.videos.map((video) => (
                  <div
                    key={video.id}
                    className="col-12 col-md-6 col-lg-4 d-flex flex-column align-items-center mb-3"
                  >
                    <strong className="mb-2 text-center">Título: {video.name}</strong>
                    <div className="ratio ratio-16x9 w-100" style={{ maxWidth: '480px' }}>
                      <iframe
                        src={`https://www.youtube.com/embed/${video.youtubeId}`}
                        title={video.name}
                        referrerPolicy="strict-origin-when-cross-origin"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="lead text-center mb-4">No hay videos disponibles.</p>
            )}
          </>
        ) : (
          <p className="lead text-center mb-4">No hay videos disponibles.</p>
        )}
      </div>
    </div>
  )
}

export default Videos
