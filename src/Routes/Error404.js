import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { Link } from 'react-router-dom';

class Error404 extends Component {
    render() {
        return (
            <Container>
                <h2 className="text-center my-5">Error 404! Page Not Found</h2>
                <div className="text-center">
                    <Link to="/"> Go to Dashboard </Link>
                </div>
            </Container>
        );
    }
}

export default Error404;
