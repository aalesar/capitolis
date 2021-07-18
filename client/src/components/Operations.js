import React from "react"
import { Modal,Form,InputNumber,Input, Button } from "antd"
import { useMutation } from "react-query";
import {addTransaction, compressTransactions, fetchTransactions } from "../Services/api"
import {toCsv} from 'react-csv-downloader';
import FileSaver from 'file-saver';

const columns = [{
            id: 'name',
            displayName: 'Counterparty name'
            }, 
            {
            id: 'amount',
            displayName: 'Amount'
            }
        ];

function Operations(props){

    const [isModalVisible, setIsModalVisible] = React.useState(false);

    const addMutation = useMutation((newTransaction) =>
            addTransaction(newTransaction),
            {onSuccess: () => {
                props.queryClient.invalidateQueries(fetchTransactions.key)
              }
            }
    );

    const compressMutation = useMutation(() =>
            compressTransactions(),
            {onSuccess: (data) => {
                toCsv({columns:columns, datas:data})
                    .then((csv)=>{
                        var csvData = new Blob([csv], { type: 'text/csv;charset=utf-8;'});
                        FileSaver.saveAs(csvData, 'data.csv'); 
                        props.queryClient.invalidateQueries(fetchTransactions.key);
                    })
              }
            }
    );

    const [form] = Form.useForm();
    
    const { confirm } = Modal;

    function showConfirm() {
        confirm({
          title: 'Do you Want to Compress all transactions?',
          content: 'This operation is permanent',
          onOk() {
            compressMutation.mutate();
          },
          onCancel() {
            console.log('Cancel');
          },
        });
      }


    function showModal(){
        setIsModalVisible(true);
    }

    function handleAddTransaction(value){
        addMutation.mutate(value);
        setIsModalVisible(false);
    }

    function handleCancel(){
        setIsModalVisible(false);
    }

    return <div style={{ display:"flex" , justifyContent: "space-evenly", margin:"20px"}}>
                <Button onClick={showModal}>
                    Add Transaction
                </Button>
                <Button onClick={() => showConfirm()}>
                    Compress Transactions
                </Button>
                <Modal okText="Add" title="Add Transaction" visible={isModalVisible} onCancel={handleCancel}
                    onOk={() => {
                        form
                        .validateFields(["counterparty","amount",])
                        .then((value) => {
                            form.resetFields();
                            handleAddTransaction(value);
                        })
                        .catch((info) => {
                            console.log('Validation Failed:', info);
                        });
                    }}>
                    <Form form={form} layout="vertical">
                        <Form.Item name="counterparty" label="Counterparty"
                                    rules={[
                                    {
                                    required: true,
                                    message: 'Please input counterparty name',
                                    },]} >
                            <Input type="textarea"/>
                        </Form.Item>
                        <Form.Item name="amount" label="Amount"
                                    rules={[{
                                        required: true,
                                        message: 'Please input transaction amount'
                                    },]}>
                            <InputNumber />
                        </Form.Item>
                    </Form>
                </Modal>
            </div>
}

export default Operations;