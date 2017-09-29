import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-flexbox-grid';

import ListResults from './real_state/ListResults';
import CardResults from './real_state/CardResults';
import ResultsControlBar from './ResultsControlBar';

import {
    RESULTS_LAYOUT_STYLE_CARD,
    RESULTS_LAYOUT_STYLE_LIST
} from './../../../../constants/LayoutConstants'

/* ACTIONS */
import { loadLatestListings } from '../../../../actions/LatestListings';


@connect(
    (store) => {
        return {
            layout: store.results_control_bar,
            latest_listings: store.latest_listings
        }
    }
)

export default class ResultsSection extends Component {

    componentDidMount() {
        const { latest_listings } = this.props;

        if (!latest_listings.processing && !latest_listings.items.length) {
            this.props.dispatch(loadLatestListings());
        }
    }

    render() {
        const { layout } = this.props;

        let list;

        if (layout.results_list_style === RESULTS_LAYOUT_STYLE_CARD) {
            list = <CardResults />;
        } else if(layout.results_list_style === RESULTS_LAYOUT_STYLE_LIST) {
            list = <ListResults />;
        }

        return (
              <div className='results-section'>
                  <ResultsControlBar />
                  <Grid class='grid'>
                      <Row>
                          <Col lg={9}>
                              {list}
                          </Col>
                          <Col lg={3}>

                          </Col>
                      </Row>
                  </Grid>
              </div>
        );
    }
}