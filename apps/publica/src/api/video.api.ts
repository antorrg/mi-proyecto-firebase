import type { ProductVideo } from '@mi-app/types'
import { productVideos } from '../../../../packages/mockData'

/**
 * Obtiene los videos asociados a un producto por su productId.
 * En Firestore se reemplazará por getDocs(query(collection(db, 'videos'), where('productId', '==', productId))).
 */
export async function getVideosByProductId(productId: string): Promise<ProductVideo | null> {
  return productVideos.find((v) => v.productId === productId && v.enabled) ?? null
}
