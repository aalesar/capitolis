import React from "react";
import View from "./View";
import Operations from './Operations';


function TransactionContainer(props) {
  console.log(props.query);
    return <div style={{margin:"20px"}}>
              <View data={props.data}/>
              <Operations queryClient={props.query} data={props.data}/>
           </div>
};

export default TransactionContainer;