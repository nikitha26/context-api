import React, {useState}from "react";

// Context Api solve this problem
function GrandChild(prop){
  return(
    <div>
      <h5>GrandChild:</h5>
      <Child arg={prop.arg}/>
    </div>
  )
}

function Child(prop){
   return(
     <div>
       <h3>Child:{prop.arg}</h3>
     </div>
   )
}

function App() {
  const[brand] = useState("Amazon")
  return(
    <div>
       <h2>Hello {brand}</h2>
       <GrandChild arg={brand}/>
    </div>
  )
}

export default App;
