import * as imagesAPI from './images-api'

export const getImages = async () => {
  try {
    const data = await imagesAPI.index()
    return data
  } catch (err) {
    console.log(err.message)
  }
}
export const getTemplates = async () => {
  try {
    const data = await imagesAPI.templateIndex()
    return data
  } catch (err) {
    console.log(err.message)
  }
}