import React from "react";
import { Image } from 'antd';
import { Layout } from 'antd';
import { Button, Space, Typography } from 'antd'
import { Link } from "react-router-dom";
import './style2.css';


const { Content } = Layout;

function Home() {
    return (
        <Layout>
            <div className="background">
            <Content style={{ height: '1000px' }}>
                    <Space direction="vertical" align="center" style={{ marginTop: '300px', width: '100%', zIndex: '1000' }}>
                        <Typography.Title level={1} style={{ color:"#fff", fontSize: "100px"}}>Everything Classical</Typography.Title>
                        <Typography.Paragraph style={{ color:"#fff", fontSize: "20px" }}>Where musicians can find resources and talk to other musicians about classical music</Typography.Paragraph>
                        <Button ghost style={{ color:"#fff", fontSize: "30px", height:"60px" }} ><Link to="/projet2/Search">Find a Piece</Link></Button>
                        
                    </Space>
            </Content>
            </div>
        </Layout>
    );
}

export default Home