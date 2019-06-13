import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux';
import { configureStore } from 'Redux/store';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'Assets/css/app.scss';
import 'react-notifications/lib/notifications.css';
import 'react-block-ui/style.css';
import { NotificationContainer } from 'react-notifications';
import Error404 from 'Routes/Error404';
import Landing from 'Routes/Landing/Landing';

class App extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <Fragment>
                <NotificationContainer />
                <Provider store={configureStore()}>
                    <Router>
                        <Switch>
                            <Route path="/error" component={Error404} />
                            <Route path="/" component={Landing} />
                        </Switch>
                    </Router>
                </Provider>
            </Fragment>
        );
    }
}

export default App;
