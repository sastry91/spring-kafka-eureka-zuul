
import './css/app.css';
import React from 'react';
import {hot} from 'react-hot-loader';
import Helmet from 'react-helmet';
import {getGuid} from 'usaa-templates/lib/shared';
import qs from 'query-string';
const MASH_UP_URL = {    development:
 'https://usaa-compl-dt2.pegacloud.net/prweb/sso?pyActivity=pzIncludeMashupScripts',
   test: 'https://usaa-compl-dt2.pegacloud.net/prweb/sso?pyActivity=pzIncludeMashupScripts',
      production: 'https://usaa-compl-dt2.pegacloud.net/prweb/sso?pyActivity=pzIncludeMashupScripts'};
      const PEGA_URL = {    development: 'https://usaa-compl-dt2.pegacloud.net/prweb/sso',
        test: 'https://usaa-compl-stg2.pegacloud.net/prweb/sso',
           production: 'https://usaa-compl-prod1.pegacloud.net/prweb/sso'};
           class App extends React.Component {    constructor(props) {
                 super(props);        this.state = {guid: ''};
                   getGuid(false).then(guid => this.setState({guid}));
                      }    render() {        let jsonString = '';
                        if (typeof location !== 'undefined' && this.stat