import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ProgressBar from 'react-toolbox/lib/progress_bar';
import { List, ListItem, ListSubHeader, ListDivider, ListCheckbox } from 'react-toolbox/lib/list';

@connect(
    (store) => {
        return {
            processing: store.search.processing,
            results: store.search.results || []
        }
    }
)

export default class ListResults extends Component {

    render() {
        const { results, processing } = this.props;

        if(processing) {
            return <ProgressBar type='circular' mode='indeterminate' multicolor />;
        }

        const itemsMap = results.map((item) => {
            return (
                <ListItem
                    key={item.pk_i_id}
                    avatar='https://dl.dropboxusercontent.com/u/2247264/assets/m.jpg'
                    caption={item.s_title}
                    legend={item.s_description}
                    rightIcon='star'
                />
            );
        });

        return (
            <List selectable ripple>
                <ListSubHeader caption='Search results' />
                {itemsMap}
            </List>
        );
    }
}