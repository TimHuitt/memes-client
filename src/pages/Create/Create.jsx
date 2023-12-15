import Header from '../../components/Header/Header'
import Bar from '../../components/Bar/Bar'

const Create = () => {
  return (
    <div className="Create page">
      <Header />
      <Bar text='Enter Caption Here' search="Add Caption"/>
      <Bar text='Search Images Here' search="Search Images"/>
    </div>
  )
}

export default Create