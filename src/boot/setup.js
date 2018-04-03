import React from 'react';
import { AppLoading, Asset, Font } from 'expo';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import Roboto from 'native-base/Fonts/Roboto.ttf';
import Roboto_medium from 'native-base/Fonts/Roboto_medium.ttf';

import { store, persistor } from './configureStore';
import App from '../App';


class Setup extends React.Component {
  state = {
    isReady: false,
  }

  async _loadAssetAsync() {
    await Font.loadAsync({
      Roboto,
      Roboto_medium,
    });

    // const fontAssets = cacheFonts([FontAwesome.font]);
    // await Promise.all([...fontAssets]);
  }

  render() {
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this._loadAssetAsync}
          onFinish={() => this.setState({ isReady: true })}
        />
      );
    }

    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    );
  }
}

export default Setup;

