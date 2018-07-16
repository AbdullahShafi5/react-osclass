import React, { Component } from 'react';
import {Checkbox as ToolboxCheckbox} from 'react-toolbox/lib/checkbox';


export default class Checkbox extends Component {

    render() {
        const {input, meta} = this.props;

        return (
            <ToolboxCheckbox
                className={'checkbox checkbox-'.concat(input.name)}
                checked={input.value || false}
                name={input.name}
                label={this.props.label}
                onChange={input.onChange} />
        )
    }
}