import React, { Component } from 'react';

export default class Private extends Component {
    render() {
        return (
            <>
                <h1> Private Component </h1>
                <button
                    onClick={() => { this.props.history.push('/') }}
                >
                    Goto Public Component
        </button>
            </>
        );
    }
}
