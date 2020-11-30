import React from "react";
import ComponentC from "./ComponentC";
import {UserProvider} from "./UserContext";

function App() {
     return(
       <div>
          <UserProvider value="Puppy">
            <ComponentC/>
          </UserProvider> 
         </div>
     )
  }
export default App;




// Context Api solve this problem
// function GrandChild(props){
//   return(
//     <div>
//       <h5>GrandChild:</h5>
//       <Child chi={props.arg}/>
//     </div>
//   )
// }

// function Child(prop){
//    return(
//      <div>
//        <h3>Child:{prop.chi}</h3>
//      </div>
//    )
// }


