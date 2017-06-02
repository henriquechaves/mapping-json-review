import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Import Components
import Helmet from 'react-helmet';
import Header from './Header';
import Footer from './Footer';
import { renderRoutes } from 'react-router-config';
import { Route } from 'react-router-dom';

//import * as styles from '../../assets.layout.css';


export class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = { isMounted: false };
  }

  componentDidMount() {
    this.setState({isMounted: true}); // eslint-disable-line
  }

  render() {
    return (
            <div>
                <Helmet
                    title="Local JSON"
                    titleTemplate="%s"
                    meta={[
                      { charset: 'utf-8' },
                      {
                        'http-equiv': 'X-UA-Compatible',
                        content: 'IE=edge',
                      },
                      {
                        name: 'viewport',
                        content: 'width=device-width, initial-scale=1',
                      },
                    ]}
                />
                <Header />
                { renderRoutes(this.props.route.routes) }
                <Footer />
            </div>
    );
  }
}

Layout.propTypes = { route: PropTypes.object.isRequired };

export default Layout;
