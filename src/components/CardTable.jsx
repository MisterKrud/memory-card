import { useState, useEffect } from "react";
import { Card } from "./Card";

export default function CardTable() {
  const [data, setData] = useState(null);
  const [touchedArray, setTouchedArray] =useState([])
  const [score, setScore] = useState(0);
  const [cards, setCards] = useState([]);
  const [highScores, setHighScores] = useState([0]);


  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://api.giphy.com/v2/emoji?api_key=VzJfRtnEENBiPs7cBI16fXcQmZIRuqic&limit=15&offset=21"
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      setData(result);
    };
    fetchData();
    console.table(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (data) {
      const cardArray = data.data.map((card) => {
        return { key: card.id, url: card.images.original_still.url };
      });
      setCards(cardArray);
    }
  }, [data]);

  useEffect(() => {
    let tempArray = [...cards];
    for (let i = tempArray.length - 1; i > 0; i--) {
      let r = Math.floor(Math.random() * (i + 1));
      let n = tempArray[i];
      tempArray[i] = tempArray[r];
      tempArray[r] = n;
      setCards(tempArray);
    
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [score]);



  function scoreHandler() {
    setScore((s) => s + 1);
  }

  function zeroScoreSetter() {
    getHighScore();
    setScore(0);

  }

  function getHighScore() {
    const newHighScoreArray = [...highScores, score];
    setHighScores(
      newHighScoreArray.sort(function (a, b) {
        return b - a;
      })
    );
    console.log(`high score: ${highScores}`);
  }

   function handleClick(id){
    console.log(`lick`)
    console.table(touchedArray)
   if(touchedArray.includes(id)){
    zeroScoreSetter();
    setTouchedArray([])
   } else {
    setTouchedArray([...touchedArray, id])
    scoreHandler()
   }
    }

  return cards ? (
    <> 
    <div className = "scorecard">
      <div className="score"><h2>Score: {score}</h2></div>
      <div className="high-score"><h2>Highest score: {highScores[0]}</h2></div>
         
      </div>
      <div className="card-table">
        {cards.map((i) => {
          return (
            <Card
              key={i.key}
              imgKey={i.key}
           
              imgSrc={i.url}
              handleClick={() => handleClick(i.key)}
              isTouched={touchedArray.includes(i.key) ? true : false}
         
            />
          );
        })}
      </div>
     
    </>
  ) : (
    <></>
  );
}
