import React from 'react'
import { Row, Col, Button } from 'reactstrap'
import { Link } from 'react-router-dom'

class Categories extends React.Component {
    state = {
        complaintId: 'CID-666',
        categories: [
            'Pickup address is wrong',
            'Dropoff address is wrong',
            'Pickup contact incorrect',
            'Dropoff contact incorrect',
            'Something else'
        ]
    }

    //lifecyle

    render() {
        return (
            <>
                <Row>
                    <Col xs="12" className="mb-3">
                        {this.state.categories.map((cat, i) =>
                            <Button key={i}
                                className="w-100 my-2"
                                outline
                                size="lg"
                                tag={Link}
                                to="/chat"
                            >
                                {cat}
                            </Button>
                        )}
                    </Col>
                </Row>
            </>
        )
    }
}

export default Categories