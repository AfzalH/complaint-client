import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { get } from 'lodash';
import FlipMove from 'react-flip-move';
import SingleOrderBiker from 'Routes/Dashboard/SingleOrderBiker';
import { Button } from 'reactstrap';

class OrdersBiker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show_count: 5
        };
        this.showMore = this.showMore.bind(this);
    }
    showMore() {
        this.setState(prevState => ({ show_count: prevState.show_count + 10 }));
    }

    render() {
        const orders = get(this.props, 'data.orders.data', []);
        const ordersToShow = orders.slice(0, this.state.show_count);
        return (
            <Fragment>
                <h5 className="font-weight-light grad-border-left thin my-3 text-primary">All Orders</h5>
                <FlipMove>
                    {ordersToShow.map(order => (
                        <SingleOrderBiker key={order.id} order={order} />
                    ))}
                    {ordersToShow.length === 0 ? (
                        <div className="w-100 pt-2 pb-5 text-muted">No Orders to show</div>
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
)(withRouter(OrdersBiker));
