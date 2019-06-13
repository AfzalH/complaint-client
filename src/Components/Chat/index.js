import React from 'react'
import { Row, Col, Input, Button } from 'reactstrap'
import Message from '../message'

class Chat extends React.Component {
    state = {
        complaintId: 'CID-666',
        messages: [
            {
                self: false,
                author: 'aeou',
                content: 'aoeuaoeuaoeu',
                timestamp: new Date()
            },
            {
                self: true,
                author: 'aeou2',
                content: 'aoeuaoeuaoeu2',
                timestamp: new Date()
            }
        ],
        messageText: ''
    }

    //lifecyle

    render() {
        return (
            <>
                <Row>
                    <Col xs="12" className="mb-3">
                        {this.state.messages.map((msg, i) =>
                            <Message key={i} msg={msg} />
                        )}
                    </Col>
                </Row>
                <Row>
                    <Col xs="9" md="10">
                        <Input type="textarea" value={this.state.messageText}>{this.state.messageText}</Input>
                    </Col>
                    <Col xs="3" md="2">
                        <Button>SEND</Button>
                    </Col>
                </Row>
            </>
        )
    }
}

export default Chat