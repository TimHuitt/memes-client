import Bar from '../../components/Bar/Bar'
import { useLocation } from 'react-router-dom'
import './Edit.css'

const Edit = () => {
  const loc = useLocation()
  const { meme } = loc.state
  return (
    <div className="Edit page">
      <Bar text='Enter Caption Here' search="Add Caption"/>
      <img src={meme.url} />
    </div>
  )
}

export default Edit