// @flow

import React, {Fragment, Component, type Node} from 'react';
import {connect} from 'react-redux';
import {request} from './api/requests';
import {incrementCounter} from './store/actions';

type AppPropsType = {
    increment: () => void
}

@connect(null, {increment: incrementCounter})
class App extends Component<AppPropsType> {
    componentDidMount() {
        request('myUrl').get()
            .then((res) => console.log(res));
    }

    handler: Function = () => {
        const {increment} = this.props;

        increment();
    }

    render(): Node {
        return (
            <Fragment>
                <div>ХУЙ</div>
                <button type="button" onClick={this.handler}>Нажми</button>
            </Fragment>
        );
    }
}

export {App};
