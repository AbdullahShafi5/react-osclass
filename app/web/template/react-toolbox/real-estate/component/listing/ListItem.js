import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';


export default class ListItem extends Component {

    render() {
        const { data } = this.props.data;

        let real_state = data.attributes.real_state;
        
        return (
            
            <Col className='result-item' key={'list-' + item.id} xs={12}>
                <Card className='card flex-direction-row'>
                    <CardMedia
                        aspectRatio='wide'
                        image='https://placeimg.com/800/450/nature'
                        className='media' />

                    <div className={'listing-type listing-' + real_state.type.toLowerCase().replace(' ', '-')}>{real_state.type}</div>

                    <CardTitle
                        title={item.full_address}
                        subtitle={<NumberFormat value={item.formatted_price} displayType={'text'} thousandSeparator={true} prefix='$'/>}
                        className='title' />

                    <CardText className='text'>
                        <ul className='property-attributes inline-nav'>
                            <li><i className="material-icons">home</i> {real_state.square_meters} sq ft</li>
                            <li><i className="material-icons">hotel</i> {real_state.rooms}</li>
                            <li><i className="material-icons">hot_tub</i> {real_state.bathrooms}</li>
                            <li><i className="material-icons">directions_car</i> {!real_state.parking ? 0 : real_state.parking}</li>
                        </ul>
                    </CardText>
                </Card>
            </Col>
        )
    }
}

ListItem.propTypes = {
    data: PropTypes.object.isRequired
};