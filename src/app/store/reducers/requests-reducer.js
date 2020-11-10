// @flow

export const requestReducer = (state = {
    activeRequests: [],
    total: 0
}, {type}) => {
    switch (type) {
    case 'requests/start':
        return {
            activeRequests: [],
            total: state.total + 1
        };
    case 'requests/end':
        return {
            activeRequests: [],
            total: state.total - 1
        };
    default:
        return state;
    }
};
