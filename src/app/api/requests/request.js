// @flow

import {
    GET,
    POST,
    PUT,
    DELETE
} from './methods';
import type {JsFiddleType, RequestsObjectType} from '../flow-types';

export const request = (url: string): RequestsObjectType => {
    // eslint-disable-next-line no-undef
    const doFetch = (method: string, data?: JsFiddleType) => fetch(url, {
        method,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    return {
        get: (data) => doFetch(GET, data),
        post: (data) => doFetch(POST, data),
        put: (data) => doFetch(PUT, data),
        delete: (data) => doFetch(DELETE, data)
    };
};
