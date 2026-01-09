const ModelView = ({ movie, setPopData }) => {
  if (!movie) return null;

  return (
    <div className="modal-background">
      <div className="modalContainer">
        <button className="modelCrossButton" onClick={() => setPopData(false)}>X</button>
       <img  src={movie.poster}/>
        <h2>{movie.title}</h2>
        <p>{movie.category}</p>
        <p>{movie.duration}</p>
        <p>⭐ {movie.rating}</p>
        <p>Age: {movie.age}</p>
        <p>Type: {movie.type}</p>
      </div>
    </div>
  );
};

export default ModelView;
