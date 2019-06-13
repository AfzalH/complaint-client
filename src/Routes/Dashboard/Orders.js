import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { get, includes } from 'lodash';
import SingleOrder from 'Routes/Dashboard/SingleOrder';
import FlipMove from 'react-flip-move';
import { Button } from 'reactstrap';

class Orders extends Component {
    constructor(props) {
        super(props);
        this.getOrders = this.getOrders.bind(this);
        this.showMore = this.showMore.bind(this);
        this.state = {
            show_count: 5
        };
    }
    showMore() {
        this.setState(prevState => ({ show_count: prevState.show_count + 10 }));
    }
    getOrders() {
        let orders = get(this.props, 'data.orders.data', []);
        const splits = this.props.location.pathname.split('/');
        if (includes(splits, 'waiting')) orders = orders.filter(o => o.order_status === 'WAITING');
        if (includes(splits, 'assigned')) orders = orders.filter(o => o.order_status === 'ASSIGNED');
        if (includes(splits, 'picked-up')) orders = orders.filter(o => o.order_status === 'PICKED_UP');
        if (includes(splits, 'delivered')) orders = orders.filter(o => o.order_status === 'DELIVERED');
        return orders;
    }
    render() {
        const orders = this.getOrders();
        const ordersToShow = orders.slice(0, this.state.show_count);
        return (
            <Fragment>
                <FlipMove>
                    {ordersToShow.map(order => (
                        <SingleOrder key={order.id} order={order} />
                    ))}
                    {ordersToShow.length === 0 ? (
                        <div className="w-100 pt-2 pb-5 pl-3 text-muted">No Orders to show</div>
                    ) : null}
                </FlipMove>
                {this.state.show_count < orders.length ? (
                    <div className="w-100 text-center">
                        <Button color="primary" className="mt-4 mb-5" onClick={this.showMore}>
                            Show More...
                        </Button>
                    </div>
                ) : null}
            </Fragment>
        );
    }
}

export default connect(
    state => ({ data: state.rest.data }),
    {}
)(withRouter(Orders));
