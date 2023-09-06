import { useState } from 'react'
import useCurrencyConverter from './hooks/useCurrencyConverter'
import Box from './components/Box';

function App() {
  const[fromCurrency, setFromCurrency] = useState(['usd']);
  const[toCurrency, setToCurrency] = useState(['inr']);
  const[fromamount, setFromAmount] = useState(0);
  const[toAmount, setToAmount] = useState(0);

  const currentCurrency = useCurrencyConverter();
  const options = Object.keys(currentCurrency);



  const updateToAmount = () => {
      let convertedValue = currentCurrency[toCurrency];
      setToAmount((convertedValue*fromamount).toFixed(2))
  }

  const swapvalues = () => {
    setFromAmount(toAmount)
    setToAmount(fromamount)
    setToCurrency(fromCurrency)
    setFromCurrency(toCurrency)
  }

 return (
   <div
     className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
     style={{
       backgroundImage: `url('https://media.istockphoto.com/id/1045457952/photo/business-financial-concept-with-stock-market-graph-chart-indicator-screen-monitor.jpg?s=2048x2048&w=is&k=20&c=iAyl83iY5pl4D-gG5OB5p81t3We-CwDHuGODS-458us=')`,
     }}
   >
     <div className="w-full">
       <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
         <form
           onSubmit={(e) => {
             e.preventDefault();
             updateToAmount();
           }}
         >
           <div className="w-full mb-1">
             <Box
               label="From"
               options={options}
               selectedCurrency={fromCurrency}
               onCurrencyChange={(value) => setFromCurrency([value])}
               amount={fromamount}
               updateAmount={(value) => setFromAmount(value)}
             />
           </div>
           <div className="relative w-full h-0.5">
             <button
               type="button"
               className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
               onClick={swapvalues}
             >
               swap
             </button>
           </div>
           <div className="w-full mt-1 mb-4">
             <Box
               label="To"
               options={options}
               selectedCurrency={toCurrency}
               onCurrencyChange={(value) => setToCurrency([value])}
               disabled={true}
               amount={toAmount}
               updateAmount={updateToAmount}
             />
           </div>
           <button
             type="submit"
             className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
           >
              {console.log(fromCurrency)}
             Convert from {fromCurrency[0].toUpperCase()} to {toCurrency[0].toLocaleUpperCase()}
           </button>
         </form>
       </div>
     </div>
   </div>
 );
}

export default App
