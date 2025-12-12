

export function Card({ imgKey, imgSrc, isTouched, handleClick }) {

  return (
    <div key={imgKey} onClick={handleClick} className="card">
      <img
        className="emoji"
        key={imgKey}
        src={imgSrc}
        touched={isTouched}
        
      />
    </div>
  );
}
