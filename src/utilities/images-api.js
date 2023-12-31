import config from '../config'

export const index = async () => {
  const res = await fetch(config.BASE_URL)
  if (res.ok) {
    return res.json()
  } else {
    throw new Error("invalid!")
  }
}

export const templateIndex = async () => {
  const res = await fetch(config.BASE_URL + "/create")
  if (res.ok) {
    return res.json()
  } else {
    throw new Error("invalid!")
  }
}

export const saveImage = async (image) => {
  // const res = await fetch(config.BASE_URL + "/")

  const res = await fetch(config.BASE_URL, {
    method: 'POST',
    body: image
  });

  if (res.ok) {
    return res.json()
  } else {
    throw new Error("invalid!")
  }
}