import React, { Component } from 'react';
import FullScreenCard from 'Components/layout/FullScreenCard';
import { CardBody, CardTitle } from 'reactstrap';
import { connect } from 'react-redux';
import BlockUI from 'react-block-ui';
import { loginUserAction } from 'Redux/auth/actions';
import { getAction } from 'Redux/rest/actions';
import LoginForm from 'Routes/Login/LoginForm';
import DemoUsers from 'Routes/Login/DemoUsers';
import { hasValidToken } from 'Util/auth';
import { Redirect } from 'react-router-dom';

class Login extends Component {
    constructor(props) {
        super(props);
        this.onUserLogin = this.onUserLogin.bind(this);
        this.showHideDemoUsers = this.showHideDemoUsers.bind(this);
        this.populateDemoUser = this.populateDemoUser.bind(this);
        this.state = {
            showDemoUsers: false,
            demoEmail: '',
            demoPassword: ''
        };
    }

    showHideDemoUsers() {
        this.setState(pState => ({ showDemoUsers: !pState.showDemoUsers }));
    }

    onUserLogin(user) {
        this.props.loginUserAction(user, this.props.history);
    }

    componentDidMount() {
        this.props.getAction('demo-users', null, 'demoUsers');
    }

    populateDemoUser(email, password) {
        this.setState({ demoEmail: email, demoPassword: password });
    }

    render() {
        const { authUser } = this.props;
        if (hasValidToken()) return <Redirect to="/" />;
        return (
            <FullScreenCard>
                <CardBody>
                    <CardTitle tag="h4" className="text-center font-weight-light grad-border thick mb-4">
                        Log In
                    </CardTitle>
                    <BlockUI blocking={authUser.login_in_progress}>
                        {this.state.showDemoUsers ? (
                            <DemoUsers
                                key="demoUsers"
                                onShowHideDemoUsers={this.showHideDemoUsers}
                                populateDemoUser={this.populateDemoUser}
                            />
                        ) : (
                            <LoginForm
                                demoUser={this.state}
                                key="loginForm"
                                onUserLogin={this.onUserLogin}
                                onShowHideDemoUsers={this.showHideDemoUsers}
                            />
                        )}
                    </BlockUI>
                </CardBody>
            </FullScreenCard>
        );
    }
}

export default connect(
    state => ({ authUser: state.authUser }),
    { loginUserAction, getAction }
)(Login);
