import React, { Component, Fragment } from 'react';
import { Card, Col, Row } from 'reactstrap';

class FullScreenCard extends Component {
    componentDidMount() {
        document.body.classList.add('background');
    }

    componentWillUnmount() {
        document.body.classList.remove('background');
    }
    render() {
        return (
            <Fragment>
                <div className="fixed-background" />
                <main>
                    <div className="container">
                        <Row className="h-100">
                            <Col xs={12} md={8} lg={6} className="mx-auto my-auto">
                                <Card className="depth-2">{this.props.children}</Card>
                            </Col>
                        </Row>
                    </div>
                </main>
            </Fragment>
        );
    }
}

export default FullScreenCard;
