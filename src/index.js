import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { SettingsProvider } from '../src/context/SettingsContext'
import * as serviceWorker from './serviceWorker';
import { restoreSettings } from './utils/settings';


const settings = restoreSettings();

ReactDOM.render(
  <SettingsProvider settings={settings}>
    <App />
  </SettingsProvider>
  ,
  document.getElementById('root')
);


serviceWorker.unregister();
