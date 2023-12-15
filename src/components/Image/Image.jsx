import './Image.css';
import { Link } from 'react-router-dom'
import Edit from '../../pages/Edit/Edit'


const Image = ({ meme, index, noSave, isEdit }) => {


  // const handleClick = () => {
  //   return (
  //     
  //   )
  // }

  return (
    <div key={index} className="grid-item">
      <div className="image-container">
        <img src={meme.url} alt={meme.alt} />
        <p>{meme.description}</p>
        {noSave && <button className="save-button">Add Caption</button>}
      </div>
    </div>
  );
};

export default Image;
