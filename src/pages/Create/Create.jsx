import { useState, useEffect } from 'react'
import Header from '../../components/Header/Header'
import Bar from '../../components/Bar/Bar'
import Grid from '../../components/Grid/Grid'
// import images from '../../../public/images.js'
import { getTemplates } from '../../utilities/images-service.js'

const Create = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [ images, setImages ] = useState([]);

  const handleRequest = async () => {
    try {
      const imageData = await getTemplates()
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
    <div className="Create page">
      <Header />
      {/* <Bar text='Search Images Here' search="Search Images"/> */}
      <Grid memes={images} noSave={true} isEdit={true}/>
    </div>
  )
}

export default Create