// @flow

import React, {PureComponent, Fragment, type Node} from 'react';
import {reduxForm} from 'redux-form';
import {Fields} from '../components/fields';

@reduxForm({form: 'testForm'})
class TestForm extends PureComponent<*> {
    render(): Node {
        return (
            <Fragment>
                <Fields.Input name="field" />
                {/* <Fields.Input name="field2" /> */}
            </Fragment>
        );
    }
}

export {TestForm};
