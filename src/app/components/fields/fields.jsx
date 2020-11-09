// @flow

import React from 'react';
import {Field} from 'redux-form';
import {Input} from '@material-ui/core';
import {createField} from './create-field';

type PropsType = {
    name: string
}

const BindedInput = createField(Input);

export const Fields = {
    Input: ({name}: PropsType) => <Field name={name} component={BindedInput} />
};
