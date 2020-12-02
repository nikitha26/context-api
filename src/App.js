import React from "react";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";
//import ComponentC from "./ComponentC";
import {UserProvider} from "./UserContext";

function App() {
     return(
       <div>
         <ComponentA name="Hiii"/>
          <UserProvider value="John">
            <ComponentB/>
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


