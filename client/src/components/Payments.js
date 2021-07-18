import React from "react"
import {Table} from 'antd'

const columns = [
    {
      title: 'Counterparty',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
    },
  ];

function Payments(props){
    return <Table title={() => 'Paying'} 
                scroll={{ y: 220 }} 
                style={{margin: "20"}}
                bordered={true}
                pagination={false} 
                dataSource={props.data} 
                columns={columns} />;
}

export default Payments;

