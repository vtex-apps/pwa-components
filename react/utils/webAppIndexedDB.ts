import { openDB } from 'idb'

const setWebAppData = async (key: string) => {
  const db = await openDB('webApp', 1, {
    upgrade(db) {
      db.createObjectStore('webApp', {
        keyPath: 'name',
      })
    },
  })
  await db.put('webApp', { name: key, value: true })
}

export default setWebAppData
