import React from "react"
import Incomes from "./Incomes"
import Payments from "./Payments"
import 'antd/dist/antd.css';

function View(props){
    return <div style={{ height:"350px"}}>
        <div style={{ display:"flex"}}>
            <Payments data={props.data.filter(element => element.amount < 0)} />
            <Incomes data={props.data.filter(element => element.amount >= 0)}/>
        </div>
    </div>
}

export default View;