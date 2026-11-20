import { RouterProvider } from 'react-router'
import { router } from './routes'
import { ErrorBoundary } from './shared/errors/ErrorBoundary'

export default function App() {
  return (
    <ErrorBoundary>
      <RouterProvider router={router} />
    </ErrorBoundary>
  )
}

