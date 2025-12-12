import { useEffect, useState } from "react";

export function Card({imgKey, imgSrc, onScore, zeroScore, checkGlobal}){

const [isTouched, setIsTouched] = useState(false)
//   const isCardTouched = globalTouchedState ? true : isTouched

useEffect(()=>{
   checkGlobal === 1 ? setIsTouched(false) : null
   


},[checkGlobal])

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
      <img className="emoji" key={imgKey} src={imgSrc} touched={isTouched} onClick={handleTouched} />
    
    </div>
  )
}
