import Header from '../../components/Header/Header'
import Grid from '../../components/Grid/Grid'
import images from '../../../public/images.js'

const Saved = () => {
  return (
    <div className="Saved page">
      <Header />
      <Grid memes={images} noSave={true} />
    </div>
  )
}

export default Saved