import React, {Component} from 'react';
import {MapView} from 'expo';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
  Dimensions
} from 'react-native';
import { WebBrowser } from 'expo';
import Communications from 'react-native-communications';
import { MonoText } from '../components/StyledText';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import IonIcon from 'react-native-vector-icons/Ionicons';


const SCREEN_WIDTH = Dimensions.get('window').width;

export default class AboutUs extends React.Component {
  state = {
    mapLoaded: false,
    region: {
        longitude: -117.97329,
        latitude: 34.0291996,
        longitudeDelta: 0.01,
        latitudeDelta: 0.025
    }
  }
  componentDidMount(){
    this.setState({mapLoaded:true});
  }

  static navigationOptions = {
    title: 'Contact Us',
  };

  render() {
    if(!this.state.mapLoaded){
      return (
          <View style={{flex:1, justifyContent: 'center'}}>
              <ActivityIndicator size="large"/>
          </View>
      );
    }
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>         
          <View style={styles.getStartedContainer}>
            <Text style={{color:'black', fontSize:18, fontWeight: 'bold'}}>Customer Service and Sales</Text>
          
            <TouchableOpacity onPress={() => Communications.phonecall('8559098856', true)}>
              <Text style={styles.phoneText}>(855) 909-8856</Text>
            </TouchableOpacity>
              <Text style={styles.addressText}>14825 Proctor Ave, La Puente, CA 91746</Text>
            
              <Text>{"\n"}</Text>
          </View>


          <View style={styles.mapContainer}>
              <MapView
                    style={{height:(SCREEN_WIDTH*.75), width:(SCREEN_WIDTH*.75)}}
                    initialRegion={{
                      longitude: -117.97329,
                      latitude: 34.0291996,
                      longitudeDelta: 0.01,
                      latitudeDelta: 0.025
                    }}
                >
                <MapView.Marker
                    coordinate={{                      
                      longitude: -117.97329,
                      latitude: 34.0291996}}
                    title={"CRAZY RIDES"}
                    description={"14825 Proctor Ave, La Puente, CA 91746"}
                    />
                    </MapView>
          </View>
          <View style={styles.getStartedContainer}>
            <Text style={{color:'black', fontSize:18, fontWeight: 'bold'}}>Hours of Operations:</Text>
          </View>
          <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', marginTop: 0}}>
            <View style={styles.leftHoursContainer} >
              <Text>Sunday</Text>
              <Text>Monday</Text>
              <Text>Tuesday</Text>
              <Text>Wednesday</Text>
              <Text>Thursday</Text>
              <Text>Friday</Text>
              <Text>Saturday</Text>
            </View>
            <View style={styles.hoursContainer} >
              <Text>Closed</Text>
              <Text>9am-5pm</Text>
              <Text>9am-5pm</Text>
              <Text>9am-5pm</Text>
              <Text>9am-5pm</Text>
              <Text>8:30am-3pm</Text>
              <Text>7:30am-2pm</Text>
            </View>
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
    backgroundColor: '#fff',
  },
  socialIcons:{
    flexDirection: 'row', 
    justifyContent: 'center', 
    marginTop: -15
  },
  mapContainer:{
    flexDirection: 'row', 
    justifyContent: 'center', 
    marginTop: -3,
    
    //backgroundColor: 'white',
  },
  hoursContainer:{
    width: (SCREEN_WIDTH/2)-3, 
    height: 200, 
    backgroundColor: '#fff', 
    justifyContent: 'center'
  },
  leftHoursContainer:{
    width: (SCREEN_WIDTH/2)-3, 
    height: 200, 
    backgroundColor: '#fff', 
    justifyContent: 'center',
    left:50
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
    color: 'black',
    fontSize: 18,
    textAlign: 'center',
  },
  socialText: {
    marginTop: 10,
    color: 'red',
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
    color: '#18609C',
  },
});


