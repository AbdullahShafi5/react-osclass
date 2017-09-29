import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider }             from 'react-redux';
import ReactOsClass from './App';
import DevTools                 from './DevTools';

export default class Root extends Component {
  render() {
    return (
      <Provider store={this.props.store}>
        <div>
          <ReactOsClass />
          <DevTools />
        </div>
      </Provider>
    );
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
};
