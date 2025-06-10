import { registerRootComponent } from 'expo';
import 'react-native-gesture-handler';
import './src/translations/i18n.js'

import App from './src/App.jsx';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
