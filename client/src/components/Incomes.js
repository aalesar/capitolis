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

function Incomes(props){
    return <Table title={() => 'Receiving'} 
                  scroll={{ y: 220 }}
                  pagination={false} 
                  dataSource={props.data}
                  bordered={true}
                  columns={columns} />
}

export default Incomes;