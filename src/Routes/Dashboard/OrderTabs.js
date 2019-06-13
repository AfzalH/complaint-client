import React, { Component } from 'react';
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem } from 'reactstrap';
import { NavLink, withRouter } from 'react-router-dom';
import { includes } from 'lodash';
import { isManager } from 'Util/auth';

class OrderTabs extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false
        };
        this.isDropdownActive = this.isDropdownActive.bind(this);
        this.getDropDownText = this.getDropDownText.bind(this);
    }

    toggle() {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }

    isDropdownActive() {
        const splits = this.props.location.pathname.split('/');
        return (
            includes(splits, 'waiting') ||
            includes(splits, 'assigned') ||
            includes(splits, 'picked-up') ||
            includes(splits, 'delivered')
        );
    }

    getDropDownText() {
        const splits = this.props.location.pathname.split('/');
        if (includes(splits, 'waiting')) return 'Waiting';
        if (includes(splits, 'assigned')) return 'Assigned';
        if (includes(splits, 'picked-up')) return 'Picked Up';
        if (includes(splits, 'delivered')) return 'Delivered';
        return 'Filter';
    }

    render() {
        this.isDropdownActive();
        return (
            <Nav pills className="mb-3">
                <NavItem>
                    <NavLink exact className={'nav-link' + (!this.isDropdownActive() ? ' active' : '')} to="/orders">
                        All Orders
                    </NavLink>
                </NavItem>
                <Dropdown tag="li" className="nav-item" isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                    <DropdownToggle
                        tag="a"
                        className={'pill-toggle pointer nav-link' + (this.isDropdownActive() ? ' active' : '')}
                        caret
                    >
                        {this.getDropDownText()}
                    </DropdownToggle>
                    <DropdownMenu>
                        {isManager() ? (
                            <DropdownItem>
                                <NavItem>
                                    <NavLink exact className="nav-link" to="/orders/waiting">
                                        Waiting
                                    </NavLink>
                                </NavItem>
                            </DropdownItem>
                        ) : null}
                        <DropdownItem>
                            <NavItem>
                                <NavLink exact className="nav-link" to="/orders/assigned">
                                    Assigned
                                </NavLink>
                            </NavItem>
                        </DropdownItem>
                        <DropdownItem>
                            <NavItem>
                                <NavLink exact className="nav-link" to="/orders/picked-up">
                                    Picked Up
                                </NavLink>
                            </NavItem>
                        </DropdownItem>
                        <DropdownItem>
                            <NavItem>
                                <NavLink exact className="nav-link" to="/orders/delivered">
                                    Delivered
                                </NavLink>
                            </NavItem>
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </Nav>
        );
    }
}

export default withRouter(OrderTabs);
