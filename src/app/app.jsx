// @flow

import React, {Fragment, Component, type Node} from 'react';
import {connect} from 'react-redux';
import {request} from './api/requests';
import {TestForm} from './forms';
import type {RequestsObjectType} from './api/flow-types';
import './scss/main.scss';

type AppPropsType = {
    actionRequest: (url: string) => RequestsObjectType
}

@connect(null, {actionRequest: request})
class App extends Component<AppPropsType> {
    componentDidMount() {
        const {actionRequest} = this.props;

        actionRequest('myUrl').get()
            .then((res) => console.log(res));
    }

    handler: Function = () => {

    }

    render(): Node {
        return (
            <Fragment>
                <div>ХУЙ</div>
                <button type="button" onClick={this.handler}>Нажми</button>
                <TestForm />
            </Fragment>
        );
    }
}

export {App};
