// import React from "react";
import Collapsible from "react-collapsible";
import Filters from "./Filters";
import Piece from "./Piece";
import 'antd/dist/antd.css';
import React from "react";
import { Link } from "react-router-dom";

import { Layout, Space } from 'antd';
const { Header, Sider, Content } = Layout;

const Search = () => {


        return (
            <Layout style={{height:"1000px"}}>
                <Sider width={250}><Filters/></Sider>

            <Content>
                <Space direction="vertical" size="middle" style={{ marginLeft: '100px', marginRight: '100px', marginTop: '100px', display: 'flex' }}>
                    <Link to="/projet2/Overview"><Piece name="Sonata I g minor BWV 1001" composer="Johann Sebastian Bach" difficulty="Henle 7/RCM DIP/ABRSM DIP" rating="5"/></Link>
                    <Piece name="Clair de Lune" composer="Claude Debussy" difficulty="Henle 5/RCM 10/ABRSM 8" rating="3"/>
                    <Piece name="Twinkle Twinkle Little Star" composer="Wolfgang Amadeus Mozart" difficulty="Henle 1/RCM 1/ABRSM 1" rating="2"/>
                </Space>
            </Content>

            </Layout>
        );
}

export default Search