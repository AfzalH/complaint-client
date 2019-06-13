import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LoginFormFields from 'Routes/Login/LoginFormFields';
import LoginFormActions from 'Routes/Login/LoginFormActions';
import { Form } from 'reactstrap';
import { handleInput } from 'Util/form';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: props.demoUser.demoEmail,
            password: props.demoUser.demoPassword
        };
        this.handleInput = handleInput.bind(this);
        this.submitDisabled = this.submitDisabled.bind(this);
    }

    submitDisabled() {
        return !this.state.password || !this.state.email;
    }

    render() {
        return (
            <Form
                onSubmit={e => {
                    e.preventDefault();
                    this.props.onUserLogin(this.state);
                }}
            >
                <LoginFormFields handleInput={this.handleInput} demoUser={this.props.demoUser} />
                <LoginFormActions
                    submitDisabled={this.submitDisabled}
                    onShowHideDemoUsers={this.props.onShowHideDemoUsers}
                />
            </Form>
        );
    }
}

LoginForm.propTypes = {
    onUserLogin: PropTypes.func,
    onShowHideDemoUsers: PropTypes.func,
    demoUser: PropTypes.object
};

export default LoginForm;
