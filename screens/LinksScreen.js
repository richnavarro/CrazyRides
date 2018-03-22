import React from 'react';
import { ScrollView, StyleSheet, Text, View, Dimensions, Image, TouchableOpacity } from 'react-native';
import {Card, Button} from 'react-native-elements';
import Deck from '../components/Deck';

import Communications from 'react-native-communications';
//import Entypo from '@expo/vector-icons/fonts';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const DATA = [
  { id: 1, text: 'Large Variety of Bulls', uri: 'https://scontent-lax3-1.cdninstagram.com/t51.2885-15/e35/22071493_1737373639620464_7441126914443444224_n.jpg', 
      description: 'We have a large selection of bulls to choose from, varying from appearance and size.', imageProps: {resizeMode: 'cover'} },
  { id: 2, text: 'Black Bull with Red Horns', uri: 'http://www.bullsandjumpers.com/wp-content/uploads/2016/12/edited_IMG_85121-604x270.jpg', 
      description: 'Here we have a Black Bull with large Red Horns on a matching corral of red and black.', imageProps: {resizeMode: 'cover'} },
  { id: 3, text: 'Oversized Black Bull', uri: 'https://scontent-lax3-1.cdninstagram.com/t51.2885-15/e35/21148122_509801739364570_4019561541870288896_n.jpg', 
      description: 'This is an example of an oversized Black Bull with downward facing horns.', imageProps: {resizeMode: 'contain'}},
  { id: 4, text: 'Oversized Grey Crazy Bull', uri: 'http://www.bullsandjumpers.com/wp-content/uploads/2017/03/20170223_175026-604x270.jpg', 
      description: 'This is an oversized Grey Bull with a crazy facial expression contained within a deluxe Rodeo Corral.', imageProps: {resizeMode: 'cover'} },
  { id: 5, text: 'Bulls of all sizes', uri: 'https://scontent-lax3-1.cdninstagram.com/t51.2885-15/e35/20688373_125147014784176_6899013509527371776_n.jpg', 
      description: 'Our selection contains bulls to accomidate any rider, from the young to adults.', imageProps: {resizeMode: 'contain'} },
  { id: 6, text: 'Brown Buffalo', uri: 'http://www.bullsandjumpers.com/wp-content/uploads/2013/10/20170223_150643-604x270.jpg', 
      description: 'We don\'t just offer bullls. Here is a Brown Buffalo being ridden in a Rodeo Corral.', imageProps: {resizeMode: 'cover'} },
  { id: 7, text: 'Black Bull', uri: 'http://www.bullsandjumpers.com/wp-content/uploads/2016/12/image_20160527_134313_1464387991155-1-604x270.jpg', 
      description: 'Shown is a Black Buffalo in a brown and yellow Rodeo Corral.', imageProps: {resizeMode: 'cover'} },
  { id: 8, text: 'Oversized Grey Bull', uri: 'https://scontent-lax3-1.cdninstagram.com/t51.2885-15/e35/17266159_1820574994935280_490861890885386240_n.jpg', 
      description: 'This is another example of an Oversized Grey Crazy Bull in a Rodeo Corral with green flooring.', imageProps: {resizeMode: 'contain'} },
  { id: 9, text: 'Bulls of all colors and appearances', uri: 'https://scontent-lax3-1.cdninstagram.com/t51.2885-15/e35/22069644_1632113003486022_6796493052488712192_n.jpg', 
      description: 'We are sure to find the right bull for your party!', imageProps: {resizeMode: 'cover'} },
  { id: 10, text: 'Black Bull with Red Horns', uri: 'http://www.bullsandjumpers.com/wp-content/uploads/2016/12/20161008_095317_14759462633471-604x270.jpg', 
      description: 'Here is a Black Bull with Red Horns in a Rodeo Corral.', imageProps: {resizeMode: 'cover'} },
  { id: 18, text: 'Crazy Rides', uri: 'http://www.bullsandjumpers.com/wp-content/uploads/2013/10/toro-bravo-794x329.jpg', 
      description: 'We offer the best Bulls, sure to provide Crazy Rides. Click to call us for your reservation.', imageProps: {resizeMode: 'cover'} },
];


export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Bulls',
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
          <Button onPress={() => Communications.phonecall('8559098856', true)}
            icon={{name: 'code'}}
            backgroundColor="#3F1400"
            title="Call Now!"
          />

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