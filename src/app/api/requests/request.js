// @flow

import {startRequest, stopRequest} from 'store/actions';
import {
    GET,
    POST,
    PUT,
    DELETE
} from './methods';
import type {JsFiddleType, RequestsObjectType} from '../flow-types';

export const request = (url: string): RequestsObjectType => (dispatch: Function) => {
    const doFetch = (method: string, data?: JsFiddleType) => {
        dispatch(startRequest({url}));

        // eslint-disable-next-line no-undef
        return fetch(url, {
            method,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).finally(() => dispatch(stopRequest({url})));
    };

    return {
        get: (data) => doFetch(GET, data),
        post: (data) => doFetch(POST, data),
        put: (data) => doFetch(PUT, data),
        delete: (data) => doFetch(DELETE, data)
    };
};
