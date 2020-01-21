import React, { Component } from 'react';

export default class Public extends Component {
    render() {
        return (
            <>
                <h1> Public Component </h1>
                <button
                    onClick={() => { this.props.history.push('/private') }}
                >
                    Goto Private Component
            </button>
            </>
        );
    }
}
