import React, {Fragment, Component} from 'react';
import {connect} from 'react-redux';
import {incrementCounter} from './store/actions';

@connect(null, {increment: incrementCounter})
class App extends Component {
    handler = () => {
        const {increment} = this.props;

        increment();
    }

    render() {
        return (
            <Fragment>
                <div>ХУЙ</div>
                <button type="button" onClick={this.handler}>Нажми</button>
            </Fragment>
        );
    }
}

export {App};
