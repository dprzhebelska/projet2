import React from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import './style2.css';


const {Header} = Layout;

function Nav() {
    return (
        <Layout>
            <Header>
                <Menu theme="dark" mode="horizontal">
                    <Menu.Item><Link to="/projet2/">Home</Link></Menu.Item>
                    <Menu.Item><Link to="/projet2/Search">Search</Link></Menu.Item>
                    <Menu.Item><Link to="/projet2/Articles">Articles</Link></Menu.Item>
                    <Menu.Item><Link to="/projet2/Help">Help</Link></Menu.Item>
                    <Menu.Item><Link to="/projet2/Contact">Contact Us</Link></Menu.Item>

                </Menu>
            </Header>
        </Layout>
    );
}

export default Nav