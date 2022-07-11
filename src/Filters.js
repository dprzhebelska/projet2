import React, { useState } from 'react';
import { Menu, Layout, Radio, Space, Checkbox } from 'antd';
import './App.css';

const {Sider} = Layout;

function Filters() {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <div>
            <Layout>

                <Sider trigger={null} collapsible collapsed={collapsed}>
                    <div className="logo" />
                    <Menu

                        mode="inline"
                        style={{
                            height: '100%', 
                            width: '250px',                       
                          }}
                        
                    > 
                        <Menu.SubMenu key="1" title="Sort by">
                            <Radio.Group style = {{marginLeft: '45px'}}>
                                <Space direction="vertical">
                                    <Radio value={1}>Popularity</Radio>
                                    <Radio value={2}>Difficulty</Radio>
                                    <Radio value={3}>Publication date</Radio>
                                </Space>
                            </Radio.Group>
                        </Menu.SubMenu>
                        <Menu.SubMenu key="2" title="Composer">
                            <Menu.SubMenu key="3" title="C">
                                <Checkbox.Group style = {{marginLeft: '80px'}}>
                                    <Space direction="vertical">
                                        <Checkbox value={1}>Chopin, Frederick</Checkbox>
                                        <Checkbox value={2}>Clementi, Muzio</Checkbox>
                                    </Space>
                                </Checkbox.Group>
                            </Menu.SubMenu>
                            <Menu.SubMenu key="4" title="D">
                                <Checkbox.Group style = {{marginLeft: '80px'}}>
                                    <Space direction="vertical">
                                        <Checkbox value={1}>Debussy, Claude</Checkbox>
                                        <Checkbox value={3}>Diabelli, Anton</Checkbox>
                                        <Checkbox value={2}>Dvorak, Antonin</Checkbox>
                                    </Space>
                                </Checkbox.Group>
                            </Menu.SubMenu>
                            <Menu.SubMenu key="5" title="M">
                                <Checkbox.Group style = {{marginLeft: '80px'}}>
                                    <Space direction="vertical">
                                        <Checkbox value={1}>Malher, Gustav</Checkbox>
                                        <Checkbox value={2}>Mendelssohn, Felix</Checkbox>
                                        <Checkbox value={3}>Mozart, Wolfgang Amadeus</Checkbox>
                                    </Space>
                                </Checkbox.Group>
                            </Menu.SubMenu>

                        </Menu.SubMenu>

                        <Menu.SubMenu key="6" title="Musical era">
                            <Checkbox.Group style = {{marginLeft: '45px'}}>
                                <Space direction="vertical">
                                    <Checkbox value={1}>Medieval</Checkbox>
                                    <Checkbox value={2}>Rennaissance</Checkbox>
                                    <Checkbox value={3}>Baroque</Checkbox>
                                    <Checkbox value={4}>Classical</Checkbox>
                                    <Checkbox value={5}>Romantic</Checkbox>
                                    <Checkbox value={6}>Early 20th Century</Checkbox>
                                    <Checkbox value={7}>Modern</Checkbox>
                                </Space>
                            </Checkbox.Group>
                        </Menu.SubMenu>

                        <Menu.SubMenu key="8" title="Instrumentation">
                            <Menu.SubMenu key="7" title="Keyboard instruments">
                                <Checkbox.Group style = {{marginLeft: '80px'}}>
                                    <Space direction="vertical">
                                        <Checkbox value={1}>Piano</Checkbox>
                                        <Checkbox value={2}>Organ</Checkbox>
                                        <Checkbox value={3}>Harpsichord</Checkbox>
                                    </Space>
                                </Checkbox.Group>
                            </Menu.SubMenu>
                            <Menu.SubMenu key="9" title="String instruments">
                                <Checkbox.Group style = {{marginLeft: '80px'}}>
                                    <Space direction="vertical">
                                        <Checkbox value={1}>Violin</Checkbox>
                                        <Checkbox value={2}>Viola</Checkbox>
                                        <Checkbox value={3}>Cello</Checkbox>
                                    </Space>
                                </Checkbox.Group>
                            </Menu.SubMenu>
                            <Menu.SubMenu key="10" title="Wind instruments">
                                <Checkbox.Group style = {{marginLeft: '80px'}}>
                                    <Space direction="vertical">
                                        <Checkbox value={1}>Flute</Checkbox>
                                        <Checkbox value={2}>Oboe</Checkbox>
                                        <Checkbox value={3}>Horn</Checkbox>
                                    </Space>
                                </Checkbox.Group>
                            </Menu.SubMenu>
                            <Menu.SubMenu key="11" title="Orchestral works">
                                <Checkbox.Group style = {{marginLeft: '80px'}}>
                                    <Space direction="vertical">
                                        <Checkbox value={1}>Chorus orchestra</Checkbox>
                                        <Checkbox value={2}>Chamber orchestra</Checkbox>
                                    </Space>
                                </Checkbox.Group>
                            </Menu.SubMenu>
                        </Menu.SubMenu>

                        <Menu.SubMenu key="12" title="Level">
                            <Menu.SubMenu key="13" title="RCM">
                                <Checkbox.Group style = {{marginLeft: '80px'}}>
                                    <Space direction="vertical">
                                        <Checkbox value={3}>1</Checkbox>
                                        <Checkbox value={3}>2</Checkbox>
                                        <Checkbox value={3}>3</Checkbox>
                                        <Checkbox value={1}>4</Checkbox>
                                        <Checkbox value={2}>5</Checkbox>
                                        <Checkbox value={3}>6</Checkbox>
                                        <Checkbox value={3}>7</Checkbox>
                                        <Checkbox value={3}>8</Checkbox>
                                        <Checkbox value={3}>9</Checkbox>
                                        <Checkbox value={3}>10</Checkbox>
                                        <Checkbox value={3}>ARCT</Checkbox>
                                        <Checkbox value={3}>LRCT</Checkbox>
                                    </Space>
                                </Checkbox.Group>
                            </Menu.SubMenu>
                            <Menu.SubMenu key="14" title="ABRSM">
                                <Checkbox.Group style = {{marginLeft: '80px'}}>
                                    <Space direction="vertical">
                                        <Checkbox value={3}>1</Checkbox>
                                        <Checkbox value={3}>2</Checkbox>
                                        <Checkbox value={3}>3</Checkbox>
                                        <Checkbox value={1}>4</Checkbox>
                                        <Checkbox value={2}>5</Checkbox>
                                        <Checkbox value={3}>6</Checkbox>
                                        <Checkbox value={3}>7</Checkbox>
                                        <Checkbox value={3}>8</Checkbox>
                                        <Checkbox value={3}>DipABRSM</Checkbox>
                                        <Checkbox value={3}>LRSM</Checkbox>
                                        <Checkbox value={3}>FRSM</Checkbox>
                                    </Space>
                                </Checkbox.Group>
                            </Menu.SubMenu>
                            <Menu.SubMenu key="15" title="Henle">
                                <Checkbox.Group style = {{marginLeft: '80px'}}>
                                    <Space direction="vertical">
                                        <Checkbox value={3}>1</Checkbox>
                                        <Checkbox value={3}>2</Checkbox>
                                        <Checkbox value={3}>3</Checkbox>
                                        <Checkbox value={1}>4</Checkbox>
                                        <Checkbox value={2}>5</Checkbox>
                                        <Checkbox value={3}>6</Checkbox>
                                        <Checkbox value={3}>7</Checkbox>
                                    </Space>
                                </Checkbox.Group>
                            </Menu.SubMenu>
                        </Menu.SubMenu>
                        <Menu.SubMenu key="16" title="Nationality">
                            <Menu.SubMenu key="3" title="A">
                                <Checkbox.Group style = {{marginLeft: '80px'}}>
                                    <Space direction="vertical">
                                        <Checkbox value={1}>American</Checkbox>
                                        <Checkbox value={1}>Austrian</Checkbox>

                                    </Space>
                                </Checkbox.Group>
                            </Menu.SubMenu>
                            <Menu.SubMenu key="4" title="G">
                                <Checkbox.Group style = {{marginLeft: '80px'}}>
                                    <Space direction="vertical">
                                        <Checkbox value={1}>German</Checkbox>
                                        <Checkbox value={3}>Greek</Checkbox>
                                        <Checkbox value={2}>Georgian</Checkbox>
                                    </Space>
                                </Checkbox.Group>
                            </Menu.SubMenu>
                            <Menu.SubMenu key="5" title="R">
                                <Checkbox.Group style = {{marginLeft: '80px'}}>
                                    <Space direction="vertical">
                                        <Checkbox value={1}>Russian</Checkbox>
                                        <Checkbox value={2}>Romanian</Checkbox>
                                    </Space>
                                </Checkbox.Group>
                            </Menu.SubMenu>

                        </Menu.SubMenu>
                    </Menu>
                </Sider>

            {/* <Radio.Group>
                <Space direction="vertical">
                    <Radio value={1}>Popularity</Radio>
                    <Radio value={2}>Option B</Radio>
                    <Radio value={3}>Option C</Radio>
                </Space>
            </Radio.Group>

            <Collapsible trigger="Composers">
                <ul>
                    Types of search
                    <li><input type="radio" value="Popularity" name="sort"/>Popularity</li>
                    <li><input type="radio" value="Difficulty" name="sort"/>Difficulty</li>
                    <li><input type="radio" value="Publication date" name="sort"/>Publication date</li>
                </ul>
            </Collapsible>

            <Collapsible trigger="Musical Era">
                <ul>
                    Types of search
                    <li><input type="radio" value="Popularity" name="sort"/>Popularity</li>
                    <li><input type="radio" value="Difficulty" name="sort"/>Difficulty</li>
                    <li><input type="radio" value="Publication date" name="sort"/>Publication date</li>
                </ul>
            </Collapsible>
            <Collapsible trigger="Instrumentation">
                <ul>
                    Types of search
                    <li><input type="radio" value="Popularity" name="sort"/>Popularity</li>
                    <li><input type="radio" value="Difficulty" name="sort"/>Difficulty</li>
                    <li><input type="radio" value="Publication date" name="sort"/>Publication date</li>
                </ul>
            </Collapsible>
            <Collapsible trigger="Level">
                <ul>
                    Types of search
                    <li><input type="radio" value="Popularity" name="sort"/>Popularity</li>
                    <li><input type="radio" value="Difficulty" name="sort"/>Difficulty</li>
                    <li><input type="radio" value="Publication date" name="sort"/>Publication date</li>
                </ul>
            </Collapsible>
            <Collapsible trigger="Nationality">
                <ul>
                    Types of search
                    <li><input type="radio" value="Popularity" name="sort"/>Popularity</li>
                    <li><input type="radio" value="Difficulty" name="sort"/>Difficulty</li>
                    <li><input type="radio" value="Publication date" name="sort"/>Publication date</li>
                </ul>
            </Collapsible> */}

            </Layout>

        </div>
    );
}

export default Filters