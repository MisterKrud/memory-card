import { useState } from "react";

export function Card({imgKey, imgSrc, onScore, zeroScore, touchedState}){

  const [isTouched, setIsTouched] = useState(false)
  
  if(touchedState){
    setIsTouched(true)
  }

  function handleTouched(){
   if(!isTouched){
    setIsTouched(true);
    onScore()

} else {

setIsTouched(true)
    zeroScore()
}
   
  }


  return(
    <div key={imgKey} className = {'card'+' '+'touched-'+isTouched}  >
      <img className="emoji" key={imgKey} src={imgSrc} touched={isTouched} onClick={handleTouched}/>
    
    </div>
  )
}
