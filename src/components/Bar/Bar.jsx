import './Bar.css'

const Bar = ({ text, search }) => {
  return (
    <div className="Bar">
      <input type="text" placeholder={text} />
      <input type="submit" value={search} />
    </div>
  )
}

export default Bar