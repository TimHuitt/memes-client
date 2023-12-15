import Bar from '../../components/Bar/Bar'
import Header from '../../components/Header/Header'
import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import html2canvas from 'html2canvas'
import './Edit.css'

const Edit = () => {
  const [ caption, setCaption ] = useState('')

  const handleExport = async () => {
    try {
      const imageElement = document.querySelector('.image-container')
      const canvas = await html2canvas(imageElement)
      const image = canvas.toDataURL('image/png')
      await saveImage(image)
    } catch (err) {
      console.log(err)
    }
  }
  
  console.log(caption)
  
  const loc = useLocation()
  const { meme } = loc.state
  return (
    <div className="Edit page">
      <Header />
      <Bar caption={caption} setCaption={setCaption} text='Enter Caption Here' search="Add Caption"/>
      <div className="html-image">
        <img src={meme.url} />
        <h1>{caption}</h1>
      </div>
      <button type="submit" onClick={handleExport}>Save!</button>
    </div>
  )
}

export default Edit