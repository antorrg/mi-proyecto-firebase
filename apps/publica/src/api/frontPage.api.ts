import type { IFrontPage } from '@mi-app/types'
import { frontPage } from '../../../../packages/mockData'

/**
 * Obtiene los datos de la portada (FrontPage).
 * En Firestore se reemplazará por getDocs(collection(db, 'frontPage')).
 */
export async function getFrontPage(): Promise<IFrontPage | null> {
  return frontPage.find((fp) => fp.enabled) ?? null
}
