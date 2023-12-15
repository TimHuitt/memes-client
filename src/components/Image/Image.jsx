import './Image.css';

const Image = ({ meme, index, noSave }) => {
  return (
    <div key={index} className="grid-item">
      <div className="image-container">
        <img src={meme.url} alt={meme.alt} />
        <p>{meme.description}</p>
        {noSave && <button className="save-button">Save</button>}
      </div>
    </div>
  );
};

export default Image;
