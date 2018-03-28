import React from 'react';
import { ScrollView, StyleSheet, Text, View, Dimensions, Image, TouchableOpacity, ImageBackground } from 'react-native';
import {Card, Button} from 'react-native-elements';
import Deck from '../components/Deck';
import Communications from 'react-native-communications';
//import Entypo from '@expo/vector-icons/fonts';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const DATA = [
  { id: 10, text: 'Bumper Cars', uri: 'https://static.wixstatic.com/media/3b661c_0416914c8f1f4213b09eb18f34b50d71~mv2_d_2048_2048_s_2.jpg/v1/fit/w_375,h_375/3b661c_0416914c8f1f4213b09eb18f34b50d71~mv2_d_2048_2048_s_2.jpg', 
  description: 'Pictured: Bumper Cars. Call for Pricing and Availability', imageProps: {resizeMode: 'contain'}, 
  featuredTitle: 'Call for Pricing and Availability' },
  { id: 11, text: 'Football', uri: 'https://static.wixstatic.com/media/3b661c_f462665250144fcdb1c64916bcd3e0cd~mv2.jpg/v1/fit/w_375,h_375/3b661c_f462665250144fcdb1c64916bcd3e0cd~mv2.jpg', 
    description: 'Pictured: Specialty Football Ride with Specialty Deluxe Jumper. $8,500', imageProps: {resizeMode: 'cover'}, 
    featuredTitle: '$8,500.00' },
  { id: 12, text: 'Soccer/Futbol', uri: 'https://static.wixstatic.com/media/3b661c_8355870ccb7c48ef988f913e8c26bd17~mv2.jpg/v1/fit/w_375,h_375/3b661c_8355870ccb7c48ef988f913e8c26bd17~mv2.jpg', 
    description: 'Pictured: Specialty Soccer Ride with Specialty Deluxe Jumper. $8,500', imageProps: {resizeMode: 'cover'}, 
    featuredTitle: '$8,500.00' },
  { id: 13, text: 'Football', uri: 'http://www.bullsandjumpers.com/wp-content/uploads/2017/03/IMG_6956-604x270.jpg', 
    description: 'Pictured: Specialty Football Ride with Specialty Deluxe Jumper. $8,500', imageProps: {resizeMode: 'cover'}, 
    featuredTitle: '$8,500.00' },
  { id: 14, text: 'Dog', uri: 'https://static.wixstatic.com/media/3b661c_a223722407d94064bbea2ca27ca0fc1a~mv2.jpg/v1/fit/w_375,h_375/3b661c_a223722407d94064bbea2ca27ca0fc1a~mv2.jpg', 
    description: 'Pictured: Specialty Dog Ride with Specialty Jumper. $8,500', imageProps: {resizeMode: 'cover'}, 
    featuredTitle: '$8,500.00' },
  { id: 15, text: 'Slide Jumper', uri: 'https://static.wixstatic.com/media/3b661c_f131f9ee4a274fd0b8375c7c63c2dac1~mv2_d_1536_2048_s_2.jpg/v1/fit/w_375,h_375/3b661c_f131f9ee4a274fd0b8375c7c63c2dac1~mv2_d_1536_2048_s_2.jpg', 
    description: 'Pictured: Blue Slide Jumper. Call for Pricing and Availability', imageProps: {resizeMode: 'contain'}, 
    featuredTitle: 'Call for Pricing and Availability' },
  { id: 15, text: 'Slide Jumper/Castle Combo', uri: 'https://static.wixstatic.com/media/3b661c_887edc59369d4770bcca00b2dc14944a~mv2.jpg/v1/fit/w_375,h_375/3b661c_887edc59369d4770bcca00b2dc14944a~mv2.jpg', 
    description: 'Pictued: Slide Jumper/Castle Combo. Call for Pricing and Availability.', imageProps: {resizeMode: 'contain'}, 
    featuredTitle: 'Call for Pricing and Availability' },
  { id: 15, text: 'Castle Jumper', uri: 'https://static.wixstatic.com/media/3b661c_4050273651a44215949a1f148f425e3f~mv2_d_2250_3000_s_2.jpg/v1/fit/w_375,h_375/3b661c_4050273651a44215949a1f148f425e3f~mv2_d_2250_3000_s_2.jpg', 
    description: 'Pictured: Castle Jumper. Call for Pricing and Availability.', imageProps: {resizeMode: 'contain'}, 
    featuredTitle: 'Call for Pricing and Availability' },
  { id: 15, text: 'Bounce Cage', uri: 'http://www.bullsandjumpers.com/wp-content/uploads/2017/01/20160319_120410-604x270.jpg', 
    description: 'We offer a vast array of bouncey house options. From castles, to giant slides, to bounce cages.', imageProps: {resizeMode: 'cover'}, 
    featuredTitle: 'Call for Pricing and Availability' },
  { id: 16, text: 'Crazy Rides', uri: 'http://www.bullsandjumpers.com/wp-content/uploads/2013/10/toro-bravo-794x329.jpg', 
    description: 'We offer the best Bulls and jumpers. Click to call us for your reservation.', imageProps: {resizeMode: 'cover'} },
];


export default class Jumpers extends React.Component {
  static navigationOptions = {
    title: 'Other Rentals',
  };

  renderCard(item){
    return(
      <Card
        key={item.id}
        title={item.text}
        titleStyle={{fontSize:22}}
        image={{uri: item.uri}} 
        imageProps={item.imageProps}
        wrapperStyle={{backgroundColor: '#E4713D'}}
        containerStyle={{backgroundColor: 'black'}}
        description={item.description}
        featuredTitle={item.featuredTitle}
        featuredTitleStyle={{position: 'absolute', left: 5, bottom: 0, fontSize: 20 }}
      > 
        <Text style={{marginBottom:10, textAlign:'center', fontSize:18}}>
          {item.description}
        </Text>
        <TouchableOpacity onPress={() => Communications.phonecall('8007703601', true)}>
          <Button
            icon={{name: 'code'}}
            backgroundColor="#3F1400"
            title="Call Now!"
          />
        </TouchableOpacity>
      </Card>
    );
  }
  renderNoMoreCards() {
    return (
      <Card title="All Done!">
        <Text style={{marginBottom:10}}>
          We are readily available to provide our services. Call now to make your reservation or purchase.
        </Text>

        <Button onPress={() => Communications.phonecall('8007703601', true)}
            icon={{name: 'code'}}
            backgroundColor="#3F1400"
            title="Call Now!"
          />
      </Card>
    )
  }

  render() {
    return (
      <ImageBackground
      style={{
        width: '100%',
        height: '100%'
      }}
      source={require('../assets/images/Wood.jpg')}
      >
        <View style={styles.container}>
          <Image style={styles.bottomImage} source={require('../assets/images/bull_icon.png')}/>
          <Deck
              data={DATA}
              renderCard={this.renderCard}
              renderNoMoreCards={this.renderNoMoreCards}
              />
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#551700',
  },
  bottomImage: {
    position: 'absolute',
    bottom: 0,
    right: 1,
    left: 1,
    height: 160,
  },
});