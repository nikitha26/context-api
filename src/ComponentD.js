import React from 'react';
import {UserConsumer} from "./UserContext";
function ComponentD(){
      return(
        <UserConsumer>
           { (value) =>
            {
                return <h1>Hello {value}</h1>
           }
           }
         </UserConsumer>   
     )
}
export default ComponentD;