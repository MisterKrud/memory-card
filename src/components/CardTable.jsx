import { useState, useEffect } from "react";
import { Card } from "./Card";

export default function CardTable() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [score, setScore] = useState(0)


  const [cards, setCards] = useState([])
  const [count, setCount] = useState(0)

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://api.giphy.com/v2/emoji?api_key=VzJfRtnEENBiPs7cBI16fXcQmZIRuqic&limit=12&offset=21"
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();

      console.log(result);

      setData(result);
    };
    fetchData();
   
  }, []);


function createCardArray(){
if(data!=null){
return data.data.map(card=>{
      return (
        {key: card.id, url: card.url}
      )
  
})

}

}

const cardArray = createCardArray()
console.log(cardArray)

setCards(...cardArray)



  return data != null ? (
    
    <>
      <div className="card-table">

       
        {data.data.map((i) => {
         
            
          return (
            <Card imgKey={i.id} touched={false} zeroScore={()=>setScore(0)} onScore={()=>setScore(s=>s+1)} imgSrc={i.images.original_still.url}  />
            
          );
        })}
     
      </div>
      <div>Score: {score}</div>
    </>
  ) : (
    <></>
  );
}




