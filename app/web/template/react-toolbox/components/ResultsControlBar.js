import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Form, Field, reduxForm, formValueSelector } from 'redux-form'

import {
    RESULTS_LAYOUT_STYLE_CARD,
    RESULTS_LAYOUT_STYLE_LIST
} from './../../../../constants/LayoutConstants'

import { toggleListStyle } from './../../../../actions/ResultsControlBarActions'

import Navigation from 'react-toolbox/lib/navigation';
import SortByForm from "./form/SortByForm"


const FORM = 'filter-box';

@connect(
    (store) => {
        return {
            layout: store.results_control_bar
        }
    }
)

export default class ResultsControlBar extends Component {

    _handleLayoutStyleChange(style) {
        this.props.dispatch(toggleListStyle(style));
    }

    render() {

        const { layout } = this.props;

        const actions =  [
            {
                label: 'Grid',
                onClick: this._handleLayoutStyleChange.bind(this, RESULTS_LAYOUT_STYLE_CARD),
                icon: 'view_module',
                raised: (layout.results_list_style === RESULTS_LAYOUT_STYLE_CARD)
            },
            {
                label: 'List',
                onClick: this._handleLayoutStyleChange.bind(this, RESULTS_LAYOUT_STYLE_LIST),
                icon: 'view_list',
                raised: (layout.results_list_style === RESULTS_LAYOUT_STYLE_LIST)
            }
        ];

        return (
            <section className='results-control-bar'>
                <Grid>
                    <Row middle='xs'>
                        <Col xs lg={9}>
                            <Row>
                                <Col xs>
                                    <h3>Placeholder for search text</h3>
                                </Col>
                                <Col>
                                    <SortByForm />
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={3}>
                            <Navigation actions={actions} />
                        </Col>
                    </Row>
                </Grid>
            </section>
        );
    }
}