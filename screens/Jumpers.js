import React from 'react';
import { ScrollView, StyleSheet, Text, View, Dimensions, Image, TouchableOpacity } from 'react-native';
import {Card, Button} from 'react-native-elements';
import Deck from '../components/Deck';
import Communications from 'react-native-communications';
//import Entypo from '@expo/vector-icons/fonts';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const DATA = [
    { id: 11, text: 'Football', uri: 'https://scontent-lax3-1.cdninstagram.com/t51.2885-15/e35/18160741_1895671570722008_1625817835055874048_n.jpg',
        uri2: 'http://www.bullsandjumpers.com/wp-content/uploads/2017/03/IMG_6964-604x270.jpg', 
        description: 'Throw your NFL Draft party or Football party with a NFL themed ride!', imageProps: {resizeMode: 'cover'} },
    { id: 12, text: 'Soccer/Futbol', uri: 'https://scontent-lax3-1.cdninstagram.com/t51.2885-15/e35/18300234_1328645963893188_5489851507262095360_n.jpg', 
        description: 'Throw your MLS/FIFA/World Cup party with a ride to remember!', imageProps: {resizeMode: 'cover'} },
  { id: 13, text: 'Football w/ Rider', uri: 'http://www.bullsandjumpers.com/wp-content/uploads/2017/03/IMG_6964-604x270.jpg', 
        description: 'Cheer for the home or even the away team with this football ride!', imageProps: {resizeMode: 'cover'} },
  { id: 14, text: 'Football', uri: 'http://www.bullsandjumpers.com/wp-content/uploads/2017/03/IMG_6956-604x270.jpg', 
        description: 'Don\'t get thrown through the field goal posts!', imageProps: {resizeMode: 'cover'} },
  { id: 15, text: 'Dog', uri: 'https://scontent-lax3-1.cdninstagram.com/t51.2885-15/e35/18160737_431361863876372_3765894721759608832_n.jpg', 
        description: 'We offer many more specialty options. Come in or call to find out more!', imageProps: {resizeMode: 'cover'} },
  { id: 16, text: 'Bounce Cage', uri: 'http://www.bullsandjumpers.com/wp-content/uploads/2017/01/20160319_120410-604x270.jpg', 
        description: 'We offer a vast array of bouncey house options. From castles, to giant slides, to bounce cages.', imageProps: {resizeMode: 'cover'} },
  { id: 18, text: 'Crazy Rides', uri: 'http://www.bullsandjumpers.com/wp-content/uploads/2013/10/toro-bravo-794x329.jpg', 
  description: 'We offer the best Bulls, sure to provide Crazy Rides. Click to call us for your reservation.', imageProps: {resizeMode: 'cover'} },
];


export default class Jumpers extends React.Component {
  static navigationOptions = {
    title: 'Jumpers',
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
        
      > 
        <Text style={{marginBottom:10, textAlign:'center', fontSize:18}}>
          {item.description}
        </Text>
        <TouchableOpacity onPress={() => Communications.phonecall('8559098856', true)}>
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

        <Button onPress={() => Communications.phonecall('8559098856', true)}
            icon={{name: 'code'}}
            backgroundColor="#3F1400"
            title="Call Now!"
          />
      </Card>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.bottomImage} source={require('../assets/images/bull_icon.png')}/>
        <Deck
            data={DATA}
            renderCard={this.renderCard}
            renderNoMoreCards={this.renderNoMoreCards}
            />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#551700',
  },
  bottomImage: {
    position: 'absolute',
    bottom: 0,
    right: 1,
    left: 1,
    height: 160,
  },
});