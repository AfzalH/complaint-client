import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Col, Row } from 'reactstrap';
import { get } from 'lodash';
import PropTypes from 'prop-types';

class DemoUsers extends Component {
    render() {
        const { rest } = this.props;
        const demoUsers = get(rest, 'data.demoUsers.data', []);
        return (
            <div>
                <div className="text-center mb-4">
                    <Button
                        color="link"
                        className="btn-link pointer"
                        onClick={e => {
                            e.preventDefault();
                            this.props.onShowHideDemoUsers();
                        }}
                    >
                        Back to Login Screen
                    </Button>
                </div>
                <div className="mb-4">
                    <h5 className="text-center mt-3 grad-border">Managers</h5>
                    {demoUsers
                        .filter(u => u.role === 'manager')
                        .map(manager => (
                            <Row className="mb-3" key={manager.id}>
                                <Col>
                                    <div>{manager.name}</div>
                                    <div className="small text-muted">
                                        email: {manager.email} <br />
                                        password: {manager.password}
                                    </div>
                                </Col>
                                <Col className="ml-auto col-auto">
                                    <Button
                                        color="primary"
                                        size="sm"
                                        onClick={() => {
                                            this.props.populateDemoUser(manager.email, manager.password);
                                            this.props.onShowHideDemoUsers();
                                        }}
                                    >
                                        Log in as...
                                    </Button>
                                </Col>
                            </Row>
                        ))}
                    <h5 className="text-center mt-3 grad-border">Bikers</h5>
                    {demoUsers
                        .filter(u => u.role === 'biker')
                        .map(biker => (
                            <Row className="mb-3 grad-border thin" key={biker.id}>
                                <Col>
                                    <div>{biker.name}</div>
                                    <div className="small text-muted">
                                        email: {biker.email} <br />
                                        password: {biker.password}
                                    </div>
                                </Col>
                                <Col className="ml-auto col-auto">
                                    <Button
                                        color="primary"
                                        size="sm"
                                        onClick={() => {
                                            this.props.populateDemoUser(biker.email, biker.password);
                                            this.props.onShowHideDemoUsers();
                                        }}
                                    >
                                        Log in as...
                                    </Button>
                                </Col>
                            </Row>
                        ))}
                </div>
            </div>
        );
    }
}

DemoUsers.propTypes = {
    populateDemoUser: PropTypes.func,
    onShowHideDemoUsers: PropTypes.func
};

export default connect(
    state => ({ rest: state.rest }),
    {}
)(DemoUsers);
