
import { useEffect, useState } from "react";


function useCurrencyConverter(currency){
  const [data, setData] = useState({});
  
   useEffect(() => {
    let url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`;   
     (async () => {
       try {
         const response = await fetch(url);
         const result = await response.json();
         setData(result[currency])
       } catch (error) {
         console.error("Error fetching currency data:", error);
       }
     })();
   }, [currency]);

   return data;
}

export default useCurrencyConverter;