import type { IProduct } from '@mi-app/types'
import { product } from '../../../../packages/mockData'

/**
 * Obtiene todos los productos habilitados.
 * En Firestore se reemplazará por getDocs(query(collection(db, 'products'), where('enabled', '==', true))).
 */
export async function getProducts(): Promise<IProduct[]> {
  return product.filter((p) => p.enabled)
}

/**
 * Obtiene el detalle de un producto por su ID.
 * En Firestore se reemplazará por getDoc(doc(db, 'products', id)).
 */
export async function getProductById(id: string): Promise<IProduct | null> {
  return product.find((p) => p.id === id && p.enabled) ?? null
}
