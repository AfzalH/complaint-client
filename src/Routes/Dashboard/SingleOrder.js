import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Badge, Card, Col, Row, CardBody, Button } from 'reactstrap';
import AssignAction from 'Routes/Dashboard/AssignAction';
import moment from 'moment';
import BikerPanel from 'Routes/Dashboard/BikerPanel';

class SingleOrder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show_more: false,
            show_biker_panel: false
        };
        this.toggleShowMore = this.toggleShowMore.bind(this);
        this.toggleBikerPanel = this.toggleBikerPanel.bind(this);
    }

    toggleShowMore() {
        this.setState(prevState => ({
            show_more: !prevState.show_more
        }));
    }

    toggleBikerPanel() {
        this.setState(prevState => ({
            show_biker_panel: !prevState.show_biker_panel
        }));
    }

    getBadge(order) {
        if (order.order_status === 'WAITING') return <Badge color="warning">Waiting</Badge>;
        if (order.order_status === 'ASSIGNED') return <Badge color="primary">Assigned</Badge>;
        if (order.order_status === 'PICKED_UP') return <Badge color="secondary">Picked Up</Badge>;
        if (order.order_status === 'DELIVERED') return <Badge color="success">Delivered</Badge>;
    }
    getPickedUpTime(order) {
        if (order.order_status === 'DELIVERED' || order.order_status === 'PICKED_UP')
            return (
                <Fragment>
                    <br />
                    <Badge color="secondary">
                        Picked up {moment(order.picked_up_at).fromNow()}
                        <br />
                        <span className="text-white-50 small">{moment(order.picked_up_at).format('LLL')}</span>
                    </Badge>
                </Fragment>
            );
    }
    getDeliveryTime(order) {
        if (order.order_status === 'DELIVERED')
            return (
                <Fragment>
                    <br />
                    <Badge color="success">
                        Delivered {moment(order.delivered_at).fromNow()} <br />
                        <span className="text-white-50 small">{moment(order.delivered_at).format('LLL')}</span>
                    </Badge>
                </Fragment>
            );
    }
    getAssignedTime(order) {
        if (order.order_status !== 'WAITING')
            return (
                <Fragment>
                    <Badge color="info">
                        Assigned {moment(order.assigned_at).fromNow()} <br />
                        <span className="text-white-50 small">{moment(order.assigned_at).format('LLL')}</span>
                    </Badge>
                </Fragment>
            );
    }
    render() {
        const { order } = this.props;
        return (
            <Card className="depth-1 mb-3">
                <CardBody>
                    {this.state.show_biker_panel ? (
                        <BikerPanel order={order} toggleBikerPanel={this.toggleBikerPanel} />
                    ) : (
                        <Row>
                            <Col className="col-6 col-md-3 col-lg-2 order-0">
                                <div>{this.getBadge(order)}</div>
                                <AssignAction order={order} toggleBikerPanel={this.toggleBikerPanel} />
                                {this.state.show_more ? this.getAssignedTime(order) : null}
                            </Col>
                            <Col className="order-2 mt-3 mt-md-0">
                                <div className="text-muted small">Origin:</div>
                                <div>{order.origin.address}</div>
                                {this.state.show_more ? (
                                    <div>
                                        {order.origin.sender_name}
                                        <br />
                                        {order.origin.phone_number}
                                        {this.getPickedUpTime(order)}
                                    </div>
                                ) : null}
                            </Col>
                            <Col className="order-3 mt-3 mt-md-0">
                                <div className="text-muted small">Destination:</div>
                                <div>{order.destination.address}</div>
                                {this.state.show_more ? (
                                    <div>
                                        {order.destination.recipient_name}
                                        <br />
                                        {order.destination.phone_number}
                                        {this.getDeliveryTime(order)}
                                    </div>
                                ) : null}
                            </Col>
                            <Col className="col-6 col-md-auto order-1 order-md-last">
                                <Button
                                    size="sm"
                                    color="link"
                                    className="px-0 px-md-3 pt-2"
                                    onClick={this.toggleShowMore}
                                >
                                    {this.state.show_more ? '...Show Less' : 'Show More...'}
                                </Button>
                            </Col>
                        </Row>
                    )}
                </CardBody>
            </Card>
        );
    }
}

SingleOrder.propTypes = {
    order: PropTypes.object
};

export default SingleOrder;
