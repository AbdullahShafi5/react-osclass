import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';
import ProgressBar from 'react-toolbox/lib/progress_bar';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';


@connect(
    (store) => {
        return {
            latest_listings: store.latest_listings
        }
    }
)

export default class CardResults extends Component {

    render() {
        const { items, processing } = this.props.latest_listings;

        if(processing) {
            return <ProgressBar type='circular' mode='indeterminate' multicolor />;
        }

        const itemsMap = items.map((item, index) => {

            let real_state = item.attributes.real_state;
            console.log(real_state.parking);
             return (
                <Col className='result-item' key={item.id} xs={12} sm={6} md={4} lg={4}>
                    <Card className='card'>
                        <CardMedia
                            aspectRatio='wide'
                            image={item.resources[0].primary}
                            className='media' />

                        <div className={'listing-type listing-' + real_state.type.toLowerCase().replace(' ', '-')}>{real_state.type}</div>

                        <CardTitle
                            title={item.full_address}
                            subtitle={<NumberFormat value={item.formatted_price} displayType={'text'} thousandSeparator={true} prefix='$'/>}
                            className='title' />

                        <CardText className='text'>
                            <ul className='property-attributes inline-nav'>
                                {real_state.square_meters && <li><i className="material-icons">home</i> {real_state.square_meters} sq ft</li>}
                                {real_state.rooms && <li><i className="material-icons">hotel</i> {real_state.rooms}</li>}
                                {real_state.bathrooms && <li><i className="material-icons">hot_tub</i> {real_state.bathrooms}</li>}
                                <li><i className="material-icons">directions_car</i> {!real_state.parking ? 0 : real_state.parking}</li>
                            </ul>
                        </CardText>
                    </Card>
                </Col>
            );
        });

        return (
            <Row className='grid-results card-results'>
                {itemsMap}
            </Row>
        );
    }
}