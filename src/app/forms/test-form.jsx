// @flow

import React, {PureComponent, Fragment, type Node} from 'react';
import {reduxForm} from 'redux-form';
import {Fields} from '../components/fields';

@reduxForm({form: 'testForm', initialValues: {field: ''}})
class TestForm extends PureComponent<*> {
    render(): Node {
        return (
            <Fragment>
                <Fields.Input name="field" />
                <Fields.DatePicker name="field2" />
                <Fields.Radio name="field3" />
            </Fragment>
        );
    }
}

export {TestForm};
