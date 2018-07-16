import React, { Component } from 'react';
import {Input as ToolboxField} from 'react-toolbox/lib/input';

export default class Input extends Component {

    render() {
        const input = this.props.input;
        const meta = this.props.meta;

        return (
            <ToolboxField
                className={'input input-'.concat(input.name)}
                value={input.value}
                error={meta.error}
                type={this.props.type}
                hint={this.props.hint}
                label={this.props.label}
                onChange={input.onChange}
                disabled={this.props.disabled}/>
        )
    }
}