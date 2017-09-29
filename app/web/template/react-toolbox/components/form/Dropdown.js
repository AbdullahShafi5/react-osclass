import React, { Component } from 'react';
import {Dropdown as ToolboxDropdown} from 'react-toolbox/lib/dropdown';


export default class DropDown extends Component {

    render() {
        const {input, meta} = this.props;

        return (
            <ToolboxDropdown
                className={'dropdown dropdown-'.concat(input.name)}
                auto
                value={input.value}
                error={meta.error}
                source={this.props.source || []}
                label={this.props.label}
                onChange={input.onChange}
                disabled={this.props.disabled}/>
        )
    }
}