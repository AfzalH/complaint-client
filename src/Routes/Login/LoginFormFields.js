import React, { Component, Fragment } from 'react';
import { Input } from 'reactstrap';
import PropTypes from 'prop-types';

class LoginFormFields extends Component {
    componentDidMount() {
        if(this.emailField) {
            this.emailField.focus();
        }
    }

    render() {
        return (
            <Fragment>
                <div className="form-label-group has-float-label mb-4 w-100">
                    <Input
                        type="email"
                        name="email"
                        id="email"
                        defaultValue={this.props.demoUser.demoEmail}
                        onChange={this.props.handleInput}
                        autoComplete="email"
                        placeholder="E-mail"
                        innerRef={ref => {
                            this.emailField = ref;
                        }}
                    />
                    <label htmlFor="email">E-mail</label>
                </div>
                <div className="form-label-group has-float-label mb-4 w-100">
                    <Input
                        type="password"
                        name="password"
                        id="password"
                        defaultValue={this.props.demoUser.demoPassword}
                        onChange={this.props.handleInput}
                        autoComplete="new-password"
                        placeholder="Password"
                    />
                    <label htmlFor="password">Password</label>
                </div>
            </Fragment>
        );
    }
}

LoginFormFields.propTypes = {
    handleInput: PropTypes.func,
    demoUser: PropTypes.object
};

export default LoginFormFields;
