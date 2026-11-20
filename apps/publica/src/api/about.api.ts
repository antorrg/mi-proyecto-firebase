import type { IAbout } from '@mi-app/types'
import { aboutData } from '../../../../packages/mockData'

/**
 * Obtiene la información de la sección "Acerca de".
 * En Firestore se reemplazará por getDocs(collection(db, 'about')).
 */
export async function getAbout(): Promise<IAbout | null> {
  return aboutData.find((a) => a.enabled) ?? null
}
