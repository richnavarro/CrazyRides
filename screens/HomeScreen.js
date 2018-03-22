import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions
} from 'react-native';
import { WebBrowser } from 'expo';
import Communications from 'react-native-communications';
import { MonoText } from '../components/StyledText';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import IonIcon from 'react-native-vector-icons/Ionicons';

const SCREEN_WIDTH = Dimensions.get('window').width;

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.welcomeContainer}>
            <Image
              source={
                __DEV__
                  ? require('../assets/images/crazy_rides_large.png')
                  : require('../assets/images/crazy_rides_small.png')
              }
              style={styles.welcomeImage}
            />
             <Text style={styles.headerText}>"Helping people start their own business and also throw unforgettable parties"</Text>
          </View>
         
          <View style={styles.getStartedContainer}>
            <Text style={{color:'white', fontSize:18, fontWeight: 'bold'}}>Customer Service and Sales</Text>
            <TouchableOpacity onPress={() => Communications.phonecall('8559098856', true)}>
              <Text style={styles.phoneText}>(855) 909-8856</Text>
            </TouchableOpacity>
              <Text style={styles.addressText}>14825 Proctor Ave, La Puente, CA 91746</Text>
            
              <Text>{"\n"}</Text>
          </View>
          <View style={styles.socialIcons}>
            <Text style={styles.socialText}>Click to Visit!</Text>
            <TouchableOpacity onPress={this._handleFacebookPress}>
            <Image style={{width: 72, height: 72}} source={require('../assets/images/facebook-logo.png')}/>

            </TouchableOpacity>

            <Text style={{fontSize:70, color: '#3F1400'}}>'  '</Text>

            <TouchableOpacity onPress={this._handleInstagramPress}>
            <Image style={{width: 65, height: 65}} source={require('../assets/images/ig_logo.png')}/>
            </TouchableOpacity>
          </View>
          <View style={styles.socialIcons}>
          <TouchableOpacity onPress={this._handleWebsitePress}>
              <Text style={styles.helpLinkText}>www.bullsandjumpers.com</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.paymentContainer}>
            <Image style={{width: SCREEN_WIDTH-10, height: 50}} source={require('../assets/images/cc_large.png')}/>
          </View>
          <View style={styles.getStartedContainer}>
            <Text style={styles.getStartedText}> Located in Southern California, we are here to 
            service your parties and get-togthers. We offer competitive prices on sales and rentals of
            mechanical bulls, jumpers, tables, chairs, heaters, canopies, and much more. We can help 
            you outshine all others when throwing your Cowboy/Farm-themed parties, NFL-themed parties, 
            Halloween parties, and of course, your bachelor or bachelorette party.
            </Text>
          </View>

        </ScrollView>

      </View>
    );
  }

 
  _handleFacebookPress = () => {
    WebBrowser.openBrowserAsync('https://www.facebook.com/crazyrides16/');
  };

  _handleInstagramPress = () => {
    WebBrowser.openBrowserAsync('https://www.instagram.com/crazy.ridesofficial/');
  };

  _handleWebsitePress = () => {
    WebBrowser.openBrowserAsync(
      'http://www.bullsandjumpers.com/'
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3F1400',
  },
  socialIcons:{
    flexDirection: 'row', 
    justifyContent: 'center', 
    marginTop: -15
  },
  paymentContainer:{
    flexDirection: 'row', 
    justifyContent: 'center', 
    marginTop: 10,
    //backgroundColor: 'white',
  },
  headerText: {
    marginTop:-15,
    marginBottom: 10,
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    fontStyle: 'italic',
  },
  addressText: {
    marginBottom: 10,
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
  socialText: {
    marginTop: 10,
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    transform: [{ rotate: '-30deg'}],
    width: 70,
  },
  phoneText: {
    //marginBottom: 10,
    marginTop: 0,
    //color: 'white',
    fontSize: 30,
    color: '#18609C',
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 0,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginBottom:-20
  },
  welcomeImage: {
    width: SCREEN_WIDTH,
    resizeMode: 'contain',
    marginTop: -10,
    marginBottom:-20
  },
  getStartedContainer: {
    left:5,
    alignItems: 'center',
    //marginHorizontal: SCREEN_WIDTH-20,
    width: SCREEN_WIDTH-25,
    marginTop:15
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    
    fontSize: 20,
    color: '#FED5C3',
    //lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },

  helpLinkText: {
    fontSize: 20,
    color: 'yellow',
  },
});
