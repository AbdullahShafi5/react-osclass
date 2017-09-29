import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-flexbox-grid';


@connect(
    store => {
        return {
            user: store.user
        }
    }
)
export default class UpperHeader extends Component {

    render() {
        return (
            <div className='upper-header'>
                <Grid>
                    <Row middle='xs' end='xs'>
                        <Col tagName='section'>
                            Have any questions? <strong>{this.props.user.data.s_email}</strong>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}