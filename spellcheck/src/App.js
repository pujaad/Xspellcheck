import React,{useEffect, useState} from "react";
const customDictionary = {

  teh: "the",

  wrok: "work",

  fot: "for",

  exampl: "example"

};

function App() {
  const[text,setText]=useState("");
  const[suggestion,setSuggestion]=useState("");
  const checkWords=()=>{
    let words= text.toLowerCase().split(/\s+/);
    let firstMistake=words.find(word=>customDictionary[word]);
     if(firstMistake){
      setSuggestion(`Did you mean: ${customDictionary[firstMistake]}?`);
     }else{
      setSuggestion("");
     }

  }
useEffect(()=>{
  checkWords()
},[text])
  

  return (
    <>
    <h1>Spell Check and Auto-Correction</h1>
    <textarea style={{width:"300px"}}
    placeholder="Type here..."
    value={text}
    onChange={(e)=>setText(e.target.value)}/>
    {suggestion && <p>{suggestion}</p>}
    </>
  );
}

export default App;
