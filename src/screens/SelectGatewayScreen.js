import React, { Component } from 'react';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';

export default class App extends Component {
  render() {
    const myScript = `
      document.body.style.backgroundColor = 'red';
      setTimeout(function() { window.alert('Input the figure of Payable Amount and other card details correctly') }, 2000);
      true; // note: this is required, or you'll sometimes get silent failures
    `;
    return (
      <View style={{ flex: 1 }}>
        <WebView
          source={{
            uri:
              'https://flutterwave.com/pay/pickmecabserviceszmyz',
          }}
          injectedJavaScript={myScript}
        />
      </View>
    );
  }
}