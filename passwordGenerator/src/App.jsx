import { useState, useCallback, useEffect, useRef } from 'react';

function App() {
  // State variables to manage password length, options for including numbers and special characters, and the generated password
  const [length, setLength] = useState(8);
  const [numberAllow, setNumberAllow] = useState(false);
  const [charAllow, setCharAllow] = useState(false);
  const [password, setPassword] = useState("");

  // useRef to reference the password input field
  const passwordRef = useRef(null);

  // Function to generate a new password based on the selected options
  const passwordGenerator = useCallback(() => {
    let pass = "";
    // Base string containing alphabets
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    // Include numbers in the string if numberAllow is true
    if (numberAllow) str += "0123456789";
    // Include special characters in the string if charAllow is true
    if (charAllow) str += "!@#$%^&*-_[]{}~`";

    // Loop to generate a password of the specified length
    for (let i = 1; i <= length; i++) {
      // Generate a random index to pick a character from the string
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    // Set the generated password to the state
    setPassword(pass);
  }, [length, numberAllow, charAllow, setPassword]);

  // Function to copy the generated password to the clipboard
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 99999);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  // useEffect to generate a new password whenever the length, numberAllow, or charAllow changes
  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllow, charAllow, passwordGenerator]);

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
        <h1 className='text-white text-center my-3'>Password generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
            type="text"
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder='password'
            readOnly
            ref={passwordRef}
          />
          <button 
            onClick={copyPasswordToClipboard}
            className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
          >
            Copy
          </button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
              type="range"
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => setLength(Number(e.target.value))}
            />
            <label>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
              type='checkbox'
              defaultChecked={numberAllow}
              id="numberInput"
              onChange={() => setNumberAllow((prev) => !prev)}
            />
            <label htmlFor='numberInput'>Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
              type='checkbox'
              defaultChecked={charAllow}
              id="charInput"
              onChange={() => setCharAllow((prev) => !prev)}
            />
            <label htmlFor='charInput'>Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
