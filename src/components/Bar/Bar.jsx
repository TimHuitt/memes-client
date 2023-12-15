import './Bar.css'

const Bar = ({ text, search, setCaption, caption }) => {



  function handleChange(e) {
    setCaption(e.target.value);
  }
  

  return (
    <div className="Bar">
      <input onChange={handleChange} type="text" placeholder={text} />
      <input type="submit" value={search} />
    </div>
  )
}

export default Bar