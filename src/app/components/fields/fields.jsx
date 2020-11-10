// @flow

import React from 'react';
import {Field} from 'redux-form';
import {Input, TextField} from '@material-ui/core';
import {createField} from './create-field';

type PropsType = {
    name: string
}

const BindedInput = createField(Input);
const BindedDatePicker = createField(TextField);

export const Fields = {
    Input: ({name, ...props}: PropsType) => (
        <Field name={name} component={BindedInput} props={props} />),
    DatePicker: ({name, ...props}: PropsType) => (
        <Field name={name} component={BindedDatePicker} props={{...props, type: 'date'}} />)
};
