// @flow

import React from 'react';
import {Field} from 'redux-form';
import {
    Input,
    TextField, Radio,
    Checkbox,
    Select,
    Switch,
    MenuItem
} from '@material-ui/core';
import {createField} from './create-field';

type ItemType = {
    id: string,
    name: string
}

type PropsType = {
    name: string,
    items?: Array<ItemType>
}

const BindedInput = createField(Input);
const BindedDatePicker = createField(TextField);
const BindedRadio = createField(Radio);
const BindedCheckbox = createField(Checkbox);
const BindedSelect = createField(Select);
const BindedSwitch = createField(Switch);

export const Fields = {
    Input: ({name, ...props}: PropsType): Object => (
        <Field name={name} component={BindedInput} props={props} />),
    Textarea: ({name, ...props}: PropsType): Object => (
        <Field name={name} component={BindedInput} props={{...props, multiline: true}} />),
    DatePicker: ({name, ...props}: PropsType): Object => (
        <Field name={name} component={BindedDatePicker} props={{...props, type: 'date'}} />),
    Radio: ({name, ...props}: PropsType): Object => (
        <Field name={name} component={BindedRadio} props={props} />),
    Checkbox: ({name, ...props}: PropsType): Object => (
        <Field name={name} component={BindedCheckbox} props={props} />),
    Select: ({name, items, ...props}: PropsType): Object => (
        <Field
            name={name}
            component={BindedSelect}
            props={{
                ...props,
                children: items && items.length ? items.map((item) => (
                    <MenuItem value={item.id} key={item.id}>{item.name}</MenuItem>
                )) : <MenuItem disabled>нет данных</MenuItem>
            }}
        />
    ),
    Switch: ({name, ...props}: PropsType): Object => (
        <Field name={name} component={BindedSwitch} props={{...props, color: 'primary'}} />)
};
