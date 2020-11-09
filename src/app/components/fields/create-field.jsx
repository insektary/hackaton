// @flow

import React, {PureComponent, type Node} from 'react';

type ComponentType = typeof PureComponent;

type PropsType = {
    input: {
        value: mixed,
        name: string,
        onChange: (value: mixed) => void
    }
}

export const createField = (Component: ComponentType) => {
    class Field extends PureComponent<PropsType> {
        render(): Node {
            const {input: {value, name, onChange}} = this.props;

            return (
                <Component
                    id={name}
                    onChange={onChange}
                    value={value}
                />
            );
        }
    }

    return Field;
};
