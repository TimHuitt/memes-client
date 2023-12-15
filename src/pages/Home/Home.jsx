import Header from '../../components/Header/Header'
import Grid from '../../components/Grid/Grid'
import images from '../../../public/images.js'

const Home = () => {
  return (
    <div className="Home page">
      <Header />
      <Grid memes={images}/>
      Browse
    </div>
  )
}

export default Home