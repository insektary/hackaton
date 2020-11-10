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
                <Fields.Textarea name="field1" />
                <Fields.DatePicker name="field2" />
                <Fields.Radio name="field3" value="3" />
                <Fields.Checkbox name="field4" />
                <Fields.Select name="field5" items={[{id: '1', name: 'Опция 1'}, {id: '2', name: 'Опция 2'}, {id: '3', name: 'Опция 3'}]} />
                <Fields.Switch name="field6" />
            </Fragment>
        );
    }
}

export {TestForm};
