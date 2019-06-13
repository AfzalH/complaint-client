import React, { Component } from 'react';
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { isManager } from 'Util/auth';

class NavbarDashboard extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.close = this.close.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    close() {
        this.setState({
            isOpen: false
        });
    }
    render() {
        return (
            <Navbar color="light" light expand="md">
                <NavbarBrand tag="span">
                    <NavLink exact to="/" className="nav-link text-muted">
                        Dashboard
                    </NavLink>
                </NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar onClick={this.close}>
                        <NavItem>
                            <NavLink exact to="/orders" className="nav-link">
                                Orders
                            </NavLink>
                        </NavItem>
                        {isManager() ? (
                            <NavItem>
                                <NavLink exact to="/orders/waiting" className="nav-link">
                                    Waiting
                                </NavLink>
                            </NavItem>
                        ) : null}
                        <NavItem>
                            <NavLink to="/logout" className="nav-link">
                                Logout
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        );
    }
}

export default NavbarDashboard;
