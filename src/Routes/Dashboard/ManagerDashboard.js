import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { getAction } from 'Redux/rest/actions';
import { Col, Row } from 'reactstrap';
import { Redirect, Route, Switch } from 'react-router-dom';
import OrderTabs from 'Routes/Dashboard/OrderTabs';
import Orders from 'Routes/Dashboard/Orders';
import {getCurrentUserName} from "Util/auth";

class ManagerDashboard extends Component {
    componentDidMount() {
        this.props.getAction('orders', null, 'orders');
        this.props.getAction('bikers', { includes: 'stats' }, 'bikers');

        this.apiCallHandle = setInterval(() => {
            this.props.getAction('orders', null, 'orders');
            this.props.getAction('bikers', { includes: 'stats' }, 'bikers');
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
                        <h5 className="font-weight-light grad-border-left">Manager Dashboard <small className="text-muted">({getCurrentUserName()})</small></h5>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <OrderTabs />
                        <Switch>
                            <Route exact path="/" component={Orders} />
                            <Route path="/orders" component={Orders} />
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
)(ManagerDashboard);
