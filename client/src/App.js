import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Landing from './components/Landing';
import Settings from './components/Settings';
import Records from './components/Records';
import Chat from './components/Chat';

import * as gameActions from './actions/gameActions';

class App extends Component {
    componentDidMount() {
        this.props.actions.fetchData();
    }

    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={Landing} />
                    <Route path="/settings" component={Settings} />
                    <Route path="/records" component={Records} />
                    <Route path="/chat" component={Chat} />
                </Switch>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        game: state.game
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(gameActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
