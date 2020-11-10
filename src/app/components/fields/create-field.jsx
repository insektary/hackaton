// @flow

import React, {PureComponent, type Node} from 'react';

type ComponentType = typeof PureComponent;

type PropsType = {
    input: {
        value: mixed,
        name: string,
        onChange: (value: mixed) => void
    },
    meta: Object
}

export const createField = (Component: ComponentType): function => {
    class Field extends PureComponent<PropsType> {
        render(): Node {
            const {
                input: {
                    value,
                    name,
                    onChange
                },
                meta,
                ...restProps
            } = this.props;

            return (
                <Component
                    {...restProps}
                    id={name}
                    onChange={onChange}
                    value={value}
                />
            );
        }
    }

    return Field;
};
