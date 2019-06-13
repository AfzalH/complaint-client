import React from 'react'
import { Card, CardBody, CardTitle, CardText, CardHeader, Row, Col } from 'reactstrap'

const Message = (props) => {
    console.log(props)
    return (
        <Row>
            <Col sm={{ size: 8, offset: props.msg.self ? 4 : 0 }}>
                <Card className={props.msg.self ? "depth-1 mb-3 text-right" : "depth-1 mb-3 text-left"}>
                    <CardHeader>{props.msg.author}</CardHeader>
                    <CardBody>
                        <CardText>{props.msg.content}</CardText>
                        {/* <CardText>{msg.timestamp}</CardText> */}
                    </CardBody>
                </Card>
            </Col>
        </Row>
    )
}

export default Message
