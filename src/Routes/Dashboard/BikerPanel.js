import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getAction, updateAction } from 'Redux/rest/actions';
import { Row, Col, CardBody, Card } from 'reactstrap';
import { get } from 'lodash';

class BikerPanel extends Component {
    render() {
        const bikers = get(this.props, 'data.bikers.data', []);
        const order = this.props.order;
        return (
            <Row>
                {bikers.map(biker => (
                    <Col xs={6} md={4} lg={6}>
                        <Card
                            className="depth-1 mb-3 pointer"
                            onClick={() => {
                                this.props.updateAction(
                                    'assign-order/' + order.id + '/' + biker.id,
                                    null,
                                    'assign' + order.id,
                                    getAction(
                                        'orders',
                                        null,
                                        'orders',
                                        getAction('bikers', { includes: 'stats' }, 'bikers')
                                    )
                                );
                                this.props.toggleBikerPanel();
                            }}
                        >
                            <CardBody>
                                <div>
                                    <span className="text-muted">Assign to:</span> <strong>{biker.name}</strong>
                                </div>
                                <div className="text-muted small">
                                    Stats:{' '}
                                    <span className="text-primary">Assigned : {biker.stats.assigned_count}. </span>
                                    <span className="text-danger">Picked Up : {biker.stats.picked_up_count}. </span>
                                    <span className="text-success">Delivered : {biker.stats.delivered_count}. </span>
                                    <span className="text-secondary">Total : {biker.stats.all_count}. </span>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                ))}
            </Row>
        );
    }
}

BikerPanel.propTypes = { order: PropTypes.object, toggleBikerPanel: PropTypes.func };

export default connect(
    state => ({ data: state.rest.data }),
    { updateAction }
)(BikerPanel);
