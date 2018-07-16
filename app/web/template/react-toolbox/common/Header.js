import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-flexbox-grid';
import NumberFormat from 'react-number-format'
import AppBar from 'react-toolbox/lib/app_bar';
import Dropdown from 'react-toolbox/lib/dropdown';
import Navigation from 'react-toolbox/lib/navigation';
import Link from 'react-toolbox/lib/link';

// COMPONENTS
import UpperHeader from 'template/common/UpperHeader';

import InlineSVG from "react-svg-inline"
import SiteLogoSvg from "asset/svg/web-logo.svg"


@connect((store) => {
    return {
        user: store.user,
        regions: store.region
    }
})

export default class Header extends Component {

    render() {
        return (
            <AppBar className='header' fixed>
                <Grid>
                    <Row middle="xs">
                        <Col xs className='header-logo' tagName='section'>
                            <InlineSVG svg={SiteLogoSvg} cleanup={true} height='52px'/>
                        </Col>
                        <Col xs className='phone-number' tagName='section'>
                            Questions? Call today!
                            <h3>
                                <i className="material-icons">phone</i> <NumberFormat value={this.props.user.data.s_phone_land} displayType={'text'} format="### ### ####"/>
                            </h3>
                        </Col>
                        <Col xs className='other-contacts' tagName='section'>
                            {this.props.user.data.s_phone_mobile &&
                            <div className='mobile'>
                                <p><i className='material-icons'>phone_iphone</i>
                                    <NumberFormat value={this.props.user.data.s_phone_mobile} displayType={'text'} format="### ### ####"/>
                                </p>
                            </div>}
                            <div className='email'>
                                <p><i className='material-icons'>mail_outline</i> {this.props.user.data.s_email}</p>
                            </div>
                        </Col>
                    </Row>
                </Grid>
            </AppBar>
        );
    }
}

Header.propTypes = {
    user: PropTypes.optionalObject,
    regions: PropTypes.optionalObject
};