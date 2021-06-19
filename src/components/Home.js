import React, {useState} from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";


const createEntry = (param) => {
  return (
    <Entry
      key={param.no}
      emoji={param.emoji}
      description={param.description}
      code={param.code}
    />
  );
}

function App() {

  const [state, setstate] = useState(emojipedia)

  const searchEmoji = e => {
    const param = e.target.value

    const checkEmoji = emojipedia.filter( val => {
      if (param === ''){
        return val
      } else {
        return val.keywords.includes(param)
      }

    })
    setstate(checkEmoji)
  }
  
  return (
    <div>
      <div className='header'>
        <h1>
          Emoji Thesaurus
        </h1>      
      </div>

      <div className='search-input'>
        <input placeholder='Search here...' onChange={searchEmoji}/>
      </div>

      <dl className="dictionary">{state.map(createEntry)}</dl>
    </div>
  );
}

export default App;
