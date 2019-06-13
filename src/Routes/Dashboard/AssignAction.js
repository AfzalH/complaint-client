import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { get } from 'lodash';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import { updateAction, getAction } from 'Redux/rest/actions';

class AssignAction extends Component {
    getBiker(order, bikers) {
        const match = bikers.filter(biker => biker.id === order.assignee);
        return match.length && match[0];
    }
    render() {
        const bikers = get(this.props, 'data.bikers.data', []);
        const order = this.props.order;
        const status = get(this.props, 'order.order_status', '');
        if (status === 'PICKED_UP' || status === 'DELIVERED')
            return <div className="text-muted small">{get(this.getBiker(order, bikers), 'name', 'No Name')}</div>;
        if (status === 'ASSIGNED')
            return (
                <div className="text-muted small">
                    <Button
                        color="link"
                        size="sm pl-0"
                        onClick={() => {
                            this.props.updateAction(
                                'unassign-order/' + order.id,
                                null,
                                'unassign' + order.id,
                                getAction(
                                    'orders',
                                    null,
                                    'orders',
                                    getAction('bikers', { includes: 'stats' }, 'bikers')
                                )
                            );
                        }}
                    >
                        Unassign
                    </Button>
                    <br />
                    {get(this.getBiker(order, bikers), 'name', 'No Name')}
                </div>
            );
        if (status === 'WAITING')
            return (
                <div className="text-muted small">
                    {' '}
                    <Button color="link" size="sm pl-0" onClick={this.props.toggleBikerPanel}>
                        Assign to...
                    </Button>
                </div>
            );
        return <div>...</div>;
    }
}

AssignAction.propTypes = { order: PropTypes.object, toggleBikerPanel: PropTypes.func };

export default connect(
    state => ({ data: state.rest.data }),
    { updateAction }
)(AssignAction);
