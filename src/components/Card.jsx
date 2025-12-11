import { useState } from "react";

export function Card({imgKey, imgSrc, onScore, zeroScore}){

  const [isTouched, setIsTouched] = useState(false)
  

  function handleTouched(){
   if(!isTouched){
    setIsTouched(true);
    onScore()

} else {

setIsTouched("loss")
    zeroScore()
}
   
  }


  return(
    <div key={imgKey} className = {'card'+' '+'touched-'+isTouched}  >
      <img className="emoji" key={imgKey} src={imgSrc} touched={isTouched} onClick={handleTouched}/>
    
    </div>
  )
}
