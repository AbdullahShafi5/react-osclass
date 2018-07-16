import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-flexbox-grid';

import ListItem from './listing/ListItem';
import CardItem from './listing/CardItem';
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

export default class Listings extends Component {

    render() {
        const { layout, latest_listings } = this.props;

        let Item;

        if (layout.results_list_style === RESULTS_LAYOUT_STYLE_CARD) {
            Item = <ListItem />;
        } else if(layout.results_list_style === RESULTS_LAYOUT_STYLE_LIST) {
            Item = <CardItem />;
        }

        return (
              <div className='results-section'>
                  <ResultsControlBar />
                  <Grid class='grid'>
                      <Row>
                          <Col lg={9}>
                            <Row className='grid-results card-results'>
                              {latest_listings.map((item, index) => {
                                <Item data={item} />
                              })}
                            </Row>
                        </Col>
                          <Col lg={3}>

                          </Col>
                      </Row>
                  </Grid>
              </div>
        );
    }
}