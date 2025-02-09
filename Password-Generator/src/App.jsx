import { useState, useCallback } from "react";

// import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numallowed, setnumallowed] = useState(false);
  const [spcharallowed, setspcharallowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numallowed) {
      str += "0123456789";
    }
    if (spcharallowed) {
      str += "!@#$%^&*()_+";
    }

    for (let i = 1; i <= length; i++) {
      pass = str.charAt(Math.floor(Math.random() * str.length + 1));
    }
    setPassword(pass);
  }, [length, numallowed, spcharallowed, setPassword]);

  return (
    <>
      <div className="w-screen h-screen bg-blue-500 flex flex-col justify-center items-center">
        <h1 className="text-4xl text-center font-sans p-5 w-1/2 bg-white rounded-lg">
          Password Generator
        </h1>
        <div className="main_container bg-white w-1/2 h-1/3 mt-4 rounded-lg p-6">
          <div className="sub_container1 flex flex-row space-x-4 p-2 w-full h-20">
            <input
              type="text"
              className="p-2 border rounded flex-grow"
              style={{ flexGrow: 3 }}
            />
            <button
              className="bg-blue-300 p-2 rounded flex-grow hover:bg-blue-500 text-2xl"
              style={{ flexGrow: 1 }}
            >
              Copy
            </button>
          </div>
          <div className="sub_container2 flex flex-row space-x-4 mt-4 w-full text-2xl">
            <div className="flex items-center w-full">
              <input
                type="range"
                id="lengthrange"
                min={5}
                max={15}
                value={length}
                onChange={(e) => setLength(e.target.value)}
              />
              <label htmlFor="lengthrange" className="ml-2">
                Length: {length}
              </label>
            </div>
            <div className="flex items-center w-full">
              <input type="checkbox" id="Numallowed" />
              <label htmlFor="Numallowed" className="ml-2">
                Numbers
              </label>
            </div>
            <div className="flex items-center w-full">
              <input type="checkbox" id="Spcharallowed" />
              <label htmlFor="Spcharallowed" className="ml-2">
                Special Characters
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
