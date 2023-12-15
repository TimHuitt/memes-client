import { Link } from 'react-router-dom'
import Image from '../../components/Image/Image'
import './Grid.css';

const Grid = ({ memes, noSave }) => {
  return (
    <div className="Grid">
      <Link to="/show">
        {memes.map((meme, index) => (
          <Image meme={meme} index={index} noSave={!noSave}/>
        ))}
      </Link>
    </div>
  );
}

export default Grid;
