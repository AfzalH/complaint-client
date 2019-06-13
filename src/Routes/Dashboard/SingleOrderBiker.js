import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Badge, Button, Card, CardBody, Col, Row } from 'reactstrap';
import moment from 'moment';
import { connect } from 'react-redux';
import { getAction, updateAction } from 'Redux/rest/actions';

class SingleOrderBiker extends Component {
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
                    <Badge color="secondary" className="m-1">
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
                    <Badge color="success" className="m-1">
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
                    <Badge color="info" className="m-1">
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
                    <Row>
                        <Col xs={12} md={3}>
                            {this.getAssignedTime(order)}
                            {this.getPickedUpTime(order)}
                            {this.getDeliveryTime(order)}
                        </Col>
                        <Col className="mt-3 mt-md-0">
                            <div className="text-muted small">Origin:</div>
                            <div>{order.origin.address}</div>
                            <div>
                                {order.origin.sender_name}
                                <br />
                                {order.origin.phone_number}
                            </div>
                        </Col>
                        <Col className="mt-3 mt-md-0">
                            <div className="text-muted small">Destination:</div>
                            <div>{order.destination.address}</div>
                            <div>
                                {order.destination.recipient_name}
                                <br />
                                {order.destination.phone_number}
                            </div>
                        </Col>
                        <Col xm={12} md={'auto'} className="text-center">
                            {order.order_status === 'PICKED_UP' ? (
                                <Button
                                    size="sm"
                                    color="success"
                                    className="my-3 px-4 rounded-pill"
                                    onClick={() => {
                                        this.props.updateAction(
                                            'mark-delivered/' + order.id,
                                            null,
                                            'delivered' + order.id,
                                            getAction('orders', null, 'orders')
                                        );
                                    }}
                                >
                                    Mark as Delivered
                                    <br />
                                    <small>Click this after delivery</small>
                                </Button>
                            ) : null}
                            {order.order_status === 'ASSIGNED' ? (
                                <Button
                                    size="sm"
                                    color="primary"
                                    className="my-3 px-4 rounded-pill"
                                    onClick={() => {
                                        this.props.updateAction(
                                            'mark-picked-up/' + order.id,
                                            null,
                                            'picked-up' + order.id,
                                            getAction('orders', null, 'orders')
                                        );
                                    }}
                                >
                                    Mark as Picked Up
                                    <br />
                                    <small>Click this after picking up</small>
                                </Button>
                            ) : null}
                            {order.order_status === 'DELIVERED' ? (
                                <Button size="sm" color="secondary" disabled className="my-3 px-4 rounded-pill">
                                    Delivery Complete
                                    <br />
                                    <small>No action required</small>
                                </Button>
                            ) : null}
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        );
    }
}

SingleOrderBiker.propTypes = { order: PropTypes.object };

export default connect(
    () => ({}),
    { updateAction }
)(SingleOrderBiker);
