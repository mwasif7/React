import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [charLength, setCharLength] = useState(8);
  const [isNumber, setIsNumber] = useState(false);
  const [isSpecialCharacter, setIsSpecialCharacter] = useState(false);
  const [password, setPassword] = useState("");
  const  passwordRef = useRef(null);

  const generatePassword = useCallback(() => {
    let pwd = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (isNumber) str += "0123456789";
    if (isSpecialCharacter) str += "~!@#$%^&*()_|?:";

    for (let index = 0; index < charLength; index++) {
      let char = Math.ceil(Math.random() * str.length + 1);
      pwd += str.charAt(char);
    }
    setPassword(pwd);
  }, [charLength, isNumber, isSpecialCharacter, setPassword]);

  useEffect( () => generatePassword(),[charLength,isNumber, isSpecialCharacter, generatePassword]);

  const copyToClickBoard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password);
  }, [password]);
  return (
    <>
      <div
        className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 
      bg-gray-800 text-orange-500"
      >
        <h1 className="text-white text-center my-3">Password generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
            onClick={copyToClickBoard}
          >
            copy
          </button>
        </div>

        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={charLength}
              className="cursor-pointer"
              onChange={(e) => {
                setCharLength(e.target.value);
              }}
            />
            <label>Length: {charLength}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={isNumber}
              id="numberInput"
              onChange={() => {
                setIsNumber((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={isSpecialCharacter}
              id="characterInput"
              onChange={() => {
                setIsSpecialCharacter((prev) => !prev);
              }}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
