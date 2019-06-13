import React, { Component } from 'react';
import { Container } from 'reactstrap';
import {getLastPart} from "../../Util/pathHelper"
import { getAction } from 'Redux/rest/actions';
import {connect} from "react-redux"
import {get} from "lodash"
// import { Link } from 'react-router-dom';

class Landing extends Component {
  constructor(props){
    super(props);
    const id = getLastPart(window.location.href);
    this.props.getAction('info', { id: id }, 'info');
  }
  render() {
    const info = get(this.props, 'data.info', null);
    return (
      <Container>
        <h2 className="text-center my-5">Landing Page</h2>
        <div className="text-center">
          Things will go here
        </div>
      </Container>
    );
  }
}


export default connect(
  state => ({ data: state.rest.data }),
  { getAction }
)(Landing);