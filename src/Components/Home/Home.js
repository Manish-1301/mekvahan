import React,{useState} from 'react';
import {Layout} from 'antd';
import './Home.css';
import profilePic from '../SignIn/SVG/Asset 7.svg';
import Container from '../Container/Container';
import Modal from '../Modal/Modal'

const Home=()=>{
    const [visible,setVisible]=useState(false);
    const [address,setAddress]=useState([]);
    const showModal = () => {
        setVisible(true)
    };
    
    
    const { Header, Sider, Content } = Layout;
    return(
        <Layout className="Layout">
            <Sider className="sidebar">
                <Layout>
                    <Header className="sidebar__header">
                        <img src={profilePic} alt="Profile Pic" className="Profile__pic"/>
                        <p className="Profile__name">Hi Mekvahan!</p>
                    </Header>
                    <Content className="sidebar__content">
                        <ul className="list">
                            <li className="list__text">My profile</li>
                            <li className="list__text" style={{color:"#D10029"}}>Manage Address</li>
                            <li className="list__text">Change Password</li>
                        </ul>
                    </Content>
                </Layout>
            </Sider>
            <Layout>
                <Header className="Header">
                    <div className="Header__text">
                        <p>My addreses</p>
                        <p onClick={showModal} className="Modal__button">+Add addreses</p>
                    </div>
                </Header>
                <Content className="Content">
                    <Container address={address}/>
                </Content>
            </Layout>
            <Modal visible={visible} setVisible={setVisible} address={address} setAddress={setAddress} />
        </Layout>
    );
}

export default Home;