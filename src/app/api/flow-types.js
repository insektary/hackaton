// @flow

export type JsFiddleType = {
    [string]: mixed
}

export type RequestType = (data: JsFiddleType) => Promise<any>;

export type RequestsObjectType = {
    get: RequestType,
    post: RequestType,
    put: RequestType,
    delete: RequestType
}
