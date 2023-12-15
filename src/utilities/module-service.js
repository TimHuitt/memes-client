import * as moduleAPI from './module-api'

export const getModule = async () => {
  try {
    const data = await moduleAPI.index()
    return data
  } catch (err) {
    console.log(err.message)
  }
}