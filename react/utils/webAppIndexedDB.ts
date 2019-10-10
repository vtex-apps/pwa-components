import { openDB } from 'idb' 

const setWebAppData = async (key) => {
  const db = await openDB('webApp', 1)
  await db.put('webApp', {name: key, value: true}) 
}

export default setWebAppData