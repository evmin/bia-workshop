/**
 * 
 * Building Intelligent Applications Workshop
 * 
 */

import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import 'typeface-roboto';

import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';
import { withAuthenticator } from 'aws-amplify-react';
import Predictions, { AmazonAIPredictionsProvider } from '@aws-amplify/predictions';

Amplify.configure(aws_exports); // aws-exports.js file is managed by AWS Amplify
Amplify.addPluggable(new AmazonAIPredictionsProvider());

class App extends Component { 
    render() { 
        return (
            <React.Fragment>
            <CssBaseline />
            <Container maxWidth="sm">
              <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} >
                Unicorns are real!
              </Typography>
            </Container>
          </React.Fragment>
        );
    }
}

export default withAuthenticator(App, {includeGreetings: true});