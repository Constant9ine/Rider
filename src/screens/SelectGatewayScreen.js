import React, { Component } from 'react';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';
import { StyleSheet,TouchableHighlight, Image,TouchableWithoutFeedback, Alert, Text } from 'react-native';
import languageJSON from '../common/language';
import { colors } from '../common/theme';
import { Header,} from 'react-native-elements';

export default class App extends Component {
	
	goBack(){
      //this.props.navigation.goBack();
	              this.props.navigation.navigate('Map');

    }
  render() {
    const myScript = `
      document.body.style.backgroundColor = 'white';
      setTimeout(function() { window.alert('Input the figure of Payable Amount and other card details correctly') }, 2000);
      true; // note: this is required, or you'll sometimes get silent failures
    `;
    return (
     <View style={styles.container}>
                <Header
                  backgroundColor={colors.GREY.default}
                  leftComponent={{ icon: 'ios-arrow-back', type: 'ionicon', color: colors.WHITE, size: 30, component: TouchableWithoutFeedback, onPress: () => { this.goBack() } }}
                  centerComponent={<Text style={styles.headerTitleStyle}>{languageJSON.payment}</Text>}
                  containerStyle={styles.headerStyle}
                  innerContainerStyles={{ marginLeft: 10, marginRight: 10 }}
                /> 
	  
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

const styles = StyleSheet.create({
    container: {
      backgroundColor: colors.WHITE,
      flex:1
    },
    headerStyle: {
      backgroundColor: colors.GREY.default,
      borderBottomWidth: 0
    },
    headerTitleStyle: {
      color: colors.WHITE,
      fontFamily: 'Roboto-Bold',
      fontSize: 20
    },
    box: {
        height:80,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#ededed',
        borderRadius:8,
        marginBottom:4,
        marginHorizontal:20,
        marginTop:8
    },

    thumb:{
        height:35,
        resizeMode: 'contain'
       
    }
});