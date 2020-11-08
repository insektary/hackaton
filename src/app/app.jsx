import React, {Fragment, Component} from 'react';

export class App extends Component {
    handler = () => {
        console.log('Иди в жопу');
    }

    render() {
        return (
            <Fragment>
                <div>ХУЙ</div>
                <button type="button" onClick={this.handler}>Нажми</button>
            </Fragment>
        );
    }
}
