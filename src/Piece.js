import React from "react";
import { Card, Rate } from 'antd';
import Icon, { StarFilled } from '@ant-design/icons';


function Piece(props) {

    return (
        <div>
            <Card
                title= {props.name}
                extra={<span><Rate allowHalf disabled defaultValue={Math.floor(Math.random()*4+2)} /></span>}
                // style={{
                //     width: 100%,
                // }}
            >
                <p>Composer: {props.composer}</p>
                <p>Difficulty: {props.difficulty}</p>
            </Card>
        </div>
    )
}

export default Piece