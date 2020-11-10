// @flow

export const startRequest = ({url}) => ({type: 'requests/start', payload: {url}});
export const stopRequest = ({url}) => ({type: 'requests/end', payload: {url}});
