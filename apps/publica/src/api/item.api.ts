import type { Item } from '@mi-app/types'
import { variants } from '../../../../packages/mockData'

/**
 * Obtiene todos los items habilitados de un producto por productId.
 * En Firestore se reemplazará por getDocs(query(collection(db, 'items'), where('productId', '==', productId))).
 */
export async function getItemsByProductId(productId: string): Promise<Item[]> {
  return variants.filter((item) => item.productId === productId && item.enabled)
}

/**
 * Obtiene un item específico por su ID.
 * En Firestore se reemplazará por getDoc(doc(db, 'items', id)).
 */
export async function getItemById(id: string): Promise<Item | null> {
  return variants.find((item) => item.id === id && item.enabled) ?? null
}
