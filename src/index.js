import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './main/App';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core'
import { red, amber } from '@material-ui/core/colors/';
import * as serviceWorker from './serviceWorker';

const theme = createMuiTheme({
    pallete: {
        primary: red,
        secondary: {
            main: amber[500],
            // light: white,
            // dark: black
        }
    }
})

ReactDOM.render(
    <MuiThemeProvider theme={theme}>
        <App />
    </MuiThemeProvider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
