import React, { Component } from 'react';
import { Container, Row, Col, Navbar, NavbarBrand } from 'reactstrap';
import {getLastPart} from "../../Util/pathHelper"
import { getAction } from 'Redux/rest/actions';
import {connect} from "react-redux"
import {get} from "lodash"
import { Switch, Route } from 'react-router-dom'
// import { Link } from 'react-router-dom';
import Chat from 'Components/Chat'
import Categories from 'Components/categories';

class Landing extends Component {
  constructor(props){
    super(props);
    const id = getLastPart(window.location.href);
    // this.props.getAction('info', { id: id }, 'info');
  }
  render() {
    const info = get(this.props, 'data.info', null);
    return (
      <Container>
        <Row>
            <Col xs="12" className="my-3">
                <Navbar color="light" light>
                    <NavbarBrand>Complaint ID</NavbarBrand>
                </Navbar>
            </Col>
        </Row>
        <div className="text-center">
          {/* <Chat /> */}
          {/* <Categories /> */}
          <Switch>
            <Route path="/chat" component={Chat} />
            <Route path="/*" component={Categories} />
          </Switch>
        </div>
      </Container>
    );
  }
}


export default connect(
  state => ({ data: state.rest.data }),
  { getAction }
)(Landing);