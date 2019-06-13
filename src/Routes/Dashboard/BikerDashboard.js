import React, { Component, Fragment } from 'react';
import { Col, Row } from 'reactstrap';
import { Redirect, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { getAction } from 'Redux/rest/actions';
import OrdersDeliveryAndPickup from 'Routes/Dashboard/OrdersDeliveryAndPickup';
import OrdersBiker from 'Routes/Dashboard/OrdersBiker';
import { getCurrentUserName } from 'Util/auth';

class BikerDashboard extends Component {
    componentDidMount() {
        this.props.getAction('orders', null, 'orders');

        this.apiCallHandle = setInterval(() => {
            this.props.getAction('orders', null, 'orders');
        }, 5000);
    }

    componentWillUnmount() {
        clearInterval(this.apiCallHandle);
    }

    render() {
        return (
            <Fragment>
                <Row className="mt-3">
                    <Col>
                        <h5 className="font-weight-light grad-border-left">
                            Biker Dashboard <small className="text-muted">({getCurrentUserName()})</small>
                        </h5>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Switch>
                            <Route exact path="/" component={OrdersDeliveryAndPickup} />
                            <Route path="/orders" component={OrdersBiker} />
                            <Redirect to="/error" />
                        </Switch>
                    </Col>
                </Row>
            </Fragment>
        );
    }
}

export default connect(
    () => ({}),
    { getAction }
)(BikerDashboard);
