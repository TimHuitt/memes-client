import Header from '../../components/Header/Header'
import Bar from '../../components/Bar/Bar'
import Grid from '../../components/Grid/Grid'
import images from '../../../public/images.js'

const Create = () => {
  return (
    <div className="Create page">
      <Header />
      <Bar text='Enter Caption Here' search="Add Caption"/>
      <Bar text='Search Images Here' search="Search Images"/>
      <Grid memes={images} noSave={true} isEdit={true}/>
    </div>
  )
}

export default Create