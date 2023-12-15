import { useState, useEffect } from 'react'
import Header from '../../components/Header/Header'
import Grid from '../../components/Grid/Grid'
import imagesDefault from '../../../public/images.js'
import { getImages } from '../../utilities/images-service.js'

const Home = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [ images, setImages ] = useState([]);

  const handleRequest = async () => {
    try {
      const imageData = await getImages()
      console.log(imageData)
      if (imageData) {
        setImages(imageData)
      }
    } catch (err) {
      console.log(err)
    }
    setIsLoading(false)
  }

  useEffect(() => {
    handleRequest()
  }, [])

  return (
    <div className="Home page">
      <Header />
      <Grid memes={images} isEdit={false}/>
      Browse
    </div>
  )
}

export default Home

