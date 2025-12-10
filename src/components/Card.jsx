import {useState, useEffect } from "react"

// import { GiphyFetch } from '@giphy/js-fetch-api'


// const gf = new GiphyFetch('VzJfRtnEENBiPs7cBI16fXcQmZIRuqic')

export default function Card(){
    const [card, setCard] = useState('')
       const [collection, setCollection] = useState(null);
      const [loading, setLoading] = useState(true);
      const [error, setError] = useState(null);
    
    useEffect(() =>{
        const fetchData = async()=>{
            try {
                const response = await fetch('https://api.giphy.com/v2/emoji?api_key=VzJfRtnEENBiPs7cBI16fXcQmZIRuqic&limit=15&offset=0');
                if(!response.ok){
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const result = await response.json();
                console.log('result')
                console.log(result)
                
                setCollection(result);
               
            } catch(err) {
                setError(err);

            } finally {
                setLoading(false);
            }
            };
            fetchData();
        }, []);

      
         console.log(collection)

        return (
            <>{collection.data.map(i=>{
                return(
                    <img src={i.images.fixed_width_small_still.url} />
                )
            })}
             
            
        
        </>)


        }
 