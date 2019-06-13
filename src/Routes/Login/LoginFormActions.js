import React, { Component } from 'react';
import { Button } from 'reactstrap';
import * as PropTypes from 'prop-types';

class LoginFormActions extends Component {
    render() {
        return (
            <div className="d-flex">
                <Button
                    color="link"
                    className="pt-2 pl-0 btn-link pointer"
                    onClick={e => {
                        e.preventDefault();
                        this.props.onShowHideDemoUsers();
                    }}
                >
                    Show Demo Users
                </Button>
                <Button
                    type="submit"
                    color="primary"
                    className="btn-shadow ml-auto"
                    size="md"
                    disabled={this.props.submitDisabled()}
                >
                    Log In
                </Button>
            </div>
        );
    }
}

LoginFormActions.propTypes = { submitDisabled: PropTypes.func, onShowHideDemoUsers: PropTypes.func };

export default LoginFormActions;
