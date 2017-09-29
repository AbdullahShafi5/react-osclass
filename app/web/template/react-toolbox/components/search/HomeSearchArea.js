import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import HomeSearchBox from './../search/HomeSearchBox';


export default class HomeSearchArea extends Component {

    render() {
        return (
            <div className='home-search-area'>
                <Grid className='grid'>
                    <div className='realtor-image'>

                    </div>
                    <Row center="xs" middle="xs" className='grid-row'>
                        <Col md={3} lg={4}>
                        </Col>
                        <Col xs={12} sm={10} md={9} lg={8} className='grid-col'>
                            <h2 className='search-headline'>Let's <span>find</span> the home of <span>your dreams</span></h2>
                            <div className='filter-container'>
                                <HomeSearchBox />
                            </div>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}