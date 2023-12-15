import { Link } from 'react-router-dom'
import Image from '../../components/Image/Image'
import './Grid.css';

const Grid = ({ memes, noSave, isEdit }) => {
  const link = isEdit ? "/edit" : "/show"
  
  return (
    <div className="Grid">
      <Link to={link}>
        {memes.map((meme, index) => (
          <Image key={"images-"+index} meme={meme} index={index} noSave={!noSave}/>
        ))}
      </Link>
    </div>
  );
}

export default Grid;
