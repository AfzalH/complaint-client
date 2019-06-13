import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { get } from 'lodash';
import FlipMove from 'react-flip-move';
import SingleOrderBiker from 'Routes/Dashboard/SingleOrderBiker';

class OrdersDeliveryAndPickup extends Component {
    constructor(props) {
        super(props);
        this.getDeliveryOrders = this.getDeliveryOrders.bind(this);
        this.getPickupOrders = this.getPickupOrders.bind(this);
    }

    getDeliveryOrders() {
        const orders = get(this.props, 'data.orders.data', []);
        return orders.filter(o => o.order_status === 'PICKED_UP');
    }

    getPickupOrders() {
        const orders = get(this.props, 'data.orders.data', []);
        return orders.filter(o => o.order_status === 'ASSIGNED');
    }

    render() {
        const deliveryOrders = this.getDeliveryOrders();
        const pickupOrders = this.getPickupOrders();
        return (
            <Fragment>
                <h5 className="font-weight-light grad-border-left thin my-3 text-success">Pending Delivery</h5>
                <FlipMove>
                    {deliveryOrders.map(order => (
                        <SingleOrderBiker key={order.id} order={order} />
                    ))}
                    {deliveryOrders.length === 0 ? (
                        <div className="w-100 pt-2 pb-5 text-muted">No Pending Delivery</div>
                    ) : null}
                </FlipMove>
                <h5 className="font-weight-light grad-border-left thin mb-3 mt-5 text-primary">Pending Pick Up</h5>
                <FlipMove>
                    {pickupOrders.map(order => (
                        <SingleOrderBiker key={order.id} order={order} />
                    ))}
                    {pickupOrders.length === 0 ? (
                        <div className="w-100 pt-2 pb-5 text-muted">No Pending Pickup</div>
                    ) : null}
                </FlipMove>
            </Fragment>
        );
    }
}

export default connect(
    state => ({ data: state.rest.data }),
    {}
)(withRouter(OrdersDeliveryAndPickup));
