import { useCallback, useEffect, useRef, useState } from "preact/hooks";

export function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowe] = useState(false);
  const [CharAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  //useRef hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) {
      str=str+"0123456789";
    }
    if (CharAllowed) {
      str +="~!@#$%^&*()_/.,<>?";
    }
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, CharAllowed, setCharAllowed, setPassword]);

  const copyPasswordToClipBoard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 5);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, CharAllowed, numberAllowed, passwordGenerator]);
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-sm rounded-lg px-4 my-8 py-3  text-orange-500 bg-gray-800">
        <h1 className="text-white text-center my3">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipBoard}
            className="outline-none bg-blue-700 texxt-white px-3 py-0.5 shrink-0"
          >Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e)=>{setLength(e.target.value)}}
            />
            <label htmlFor="">length :{length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowe((prev) => !prev);
              }}
            />
            <label htmlFor="">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={CharAllowed}
              id="CharInput"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label>charecter</label>
          </div>
        </div>
      </div>
    </>
  );
}
