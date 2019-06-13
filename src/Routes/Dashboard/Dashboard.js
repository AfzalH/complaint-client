import React, { Component } from 'react';
import { hasValidToken, isManager } from 'Util/auth';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';
import NavbarDashboard from 'Routes/Dashboard/NavbarDashboard';
import ManagerDashboard from 'Routes/Dashboard/ManagerDashboard';
import BikerDashboard from 'Routes/Dashboard/BikerDashboard';

class Dashboard extends Component {
    render() {
        if (!hasValidToken()) return <Redirect to="/login" />;
        const TheDashBoard = isManager() ? ManagerDashboard : BikerDashboard;
        return (
            <Container>
                <NavbarDashboard />
                <Switch>
                    <Route path="/" component={TheDashBoard} />
                </Switch>
            </Container>
        );
    }
}

export default Dashboard;
