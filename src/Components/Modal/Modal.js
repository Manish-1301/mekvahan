import React from 'react';
import { Modal,Input,Select } from 'antd';

const Modals=({visible,setVisible,address,setAddress})=>{
    let type="Home";
    let Address="";
    const {Option}=Select;
    const handleOk = e => {
        setAddress([...address,{
            type: type,
            Address: Address
        }])
        setVisible(false)
    };
    
    const handleCancel = e => {
        console.log(e);
        setVisible(false);
    };
    return (
        <Modal
          title="Create"
          visible={visible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
            <div>
                <label htmlFor="address_type">Type of address: </label>
                <Select id="address_type" name="address_type" onChange={(event)=>{
                    type=event;
                }} defaultValue="Home">
                    <Option value="Home">Home</Option>
                    <Option value="Office">Office</Option>
                    <Option value="PG">PG</Option>
                    <Option value="Others">Others</Option>
                </Select>
            </div>
            <div>
                <label htmlFor="address">Address</label>
                <Input allowClear={true} defaultValue="" placeholder="Enter your address"  id="address" onChange={(event)=>{
                    Address=event.target.value
                }}/>
            </div>
        </Modal>
    );
}

export default Modals;