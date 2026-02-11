import { useState } from "react";
import { data } from "../data/words";

function SearchInput() {
  const [inputText, setInputText] = useState("");
  const [result, setResult] = useState(null);

// handleInputChange -----------------
  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };


//   handleSubmit ------------------
  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmedText = inputText.trim();

    if (!trimmedText) {
      setResult(null);
      return;
    }

    const foundWord = data.find(
      (item) => item.word.toLowerCase() === trimmedText.toLowerCase(),
    );

    setResult(foundWord || "not-found");
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Search for a word"
            value={inputText}
            onChange={handleInputChange}
          />
          <button type="submit">Search</button>
        </form>
      </div>
      <div>
        <h3>Definition:</h3>
        {result && result !== "not-found" && <p>{result.meaning}</p>}

        {result === "not-found" && <p>Word not found in the dictionary.</p>}
      </div>
    </>
  );
}

export default SearchInput;

// import { useState } from "react";
// import { data } from "../data/words";

// function SearchInput() {
//   const [inputText, setInputText] = useState("");
//   const [result, setResult] = useState([]);
//   const [searched, setSearched] = useState(false);
//   //   console.log(data);

//   const handleInput = (e) => {
//     setInputText(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!inputText.trim()) {
//       setResult([]);
//       setSearched(false);
//       return;
//     }

//     const filtered = data.filter((item) =>
//       item.word.toLowerCase().includes(inputText.toLowerCase()),
//     );
//     // console.log(result);
//     setResult(filtered);
//     setSearched(true);
//   };

//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="search"
//           placeholder="Search for a word..."
//           value={inputText}
//           onChange={handleInput}
//         />
//         <button type="submit">Search</button>
//       </form>
//       <div>
//         <h3>Definition:</h3>
//         {result.length > 0
//   ? result.map((item) => (
//               <div key={item.word}>
//                 <p>{item.meaning}</p>
//               </div>
//             ))
//           : searched && <p>Word not found in the dictionary.</p>}
//       </div>
//     </>
//   );
// }

// export default SearchInput;
