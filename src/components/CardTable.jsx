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


  useEffect(() =>{
    if(data){
const cardArray =  data.data.map(card=>{
      return (
        {key: card.id, url: card.images.original_still.url}
      )
})
 // eslint-disable-next-line react-hooks/set-state-in-effect
 setCards(cardArray)
}
  }, [data])


  return cards? (
    
    <>
      <div className="card-table">

       
        {cards.map((i) => {
         
            console.log(i.url)
          return (
            <Card imgKey={i.key} touched={false} zeroScore={()=>setScore(0)} onScore={()=>setScore(s=>s+1)} imgSrc={i.url}  />
           
          );
           
        })}
     
      </div>
      <div>Score: {score}</div>
    </>
  ) : (
    <></>
  );
}




