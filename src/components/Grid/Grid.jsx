import { Link } from 'react-router-dom'
import Image from '../../components/Image/Image'
import './Grid.css';

const Grid = ({ memes, noSave, isEdit }) => {
  const link = isEdit ? "/edit" : "/show"
  
  return (
    <div className="Grid">
      {memes.map((meme, index) => (
        <Link to={link} state={{meme}}>
          <Image 
            key={"images-"+index} 
            meme={meme} 
            index={index} 
            noSave={!noSave} 
            url={meme.url} 
          />
        </Link>
      ))}
    </div>
  );
}

export default Grid;
