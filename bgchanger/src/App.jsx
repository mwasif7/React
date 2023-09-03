import { useState } from "react";
import Button from "./Button"; // Check the capitalization and the file path

function App() {
  const [color, setColor] = useState("olive");

  const buttonTypes = ['Red', 'Green','Blue', 'Cyan'];

  const messageFromChild = (value) => {
       setColor(value);
  }

  return (
    <div className="w-full h-screen duration-200" style={{ backgroundColor: color }} >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          {buttonTypes.map((btncolor) => (
            <Button key={btncolor} btncolor={btncolor}  parentClick={messageFromChild}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
