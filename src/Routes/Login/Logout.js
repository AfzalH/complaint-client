import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logoutAction } from 'Redux/auth/actions';
import { Redirect } from 'react-router-dom';

class Logout extends Component {
    componentWillMount() {
        this.props.logoutAction();
    }

    render() {
        return <Redirect to="/" />;
    }
}

const mapStateToProps = state => {
    return { user: state.authUser };
};

export default connect(
    mapStateToProps,
    { logoutAction }
)(Logout);
