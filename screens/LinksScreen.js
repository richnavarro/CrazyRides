import React from 'react';
import { ScrollView, StyleSheet, Text, View, Dimensions, Image, TouchableOpacity, ImageBackground } from 'react-native';
import {Card, Button} from 'react-native-elements';
import Deck from '../components/Deck';

import Communications from 'react-native-communications';
//import Entypo from '@expo/vector-icons/fonts';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const DATA = [
  { id: 101, text: 'Large Variety of Bulls', uri: 'https://scontent-lax3-1.cdninstagram.com/t51.2885-15/e35/22071493_1737373639620464_7441126914443444224_n.jpg', 
      description: 'Pictured: Regular Bulls. Come with Standard jumper. $7,500.', imageProps: {resizeMode: 'cover'}, featuredTitle: '$7,500.00' },
  { id: 102, text: 'Regular Bull with Red Horns', uri: 'http://www.bullsandjumpers.com/wp-content/uploads/2016/12/edited_IMG_85121-604x270.jpg', 
      description: 'Pictured: Regular Bull with Standard jumper. $7,500.', imageProps: {resizeMode: 'cover'}, featuredTitle: '$7,500.00' },
  { id: 103, text: 'Large Bull', uri: 'https://scontent-lax3-1.cdninstagram.com/t51.2885-15/e35/21148122_509801739364570_4019561541870288896_n.jpg', 
      description: 'Pictured: Large Bull. Comes with Deluxe jumper. $8,500', imageProps: {resizeMode: 'contain'}, featuredTitle: '$8,500.00'},
  { id: 104, text: 'Oversized Grey Crazy Bull', uri: 'http://www.bullsandjumpers.com/wp-content/uploads/2017/03/20170223_175026-604x270.jpg', 
      description: 'Pictured: Large Bull with Deluxe jumper. $8,500', imageProps: {resizeMode: 'cover'}, featuredTitle: '$8,500.00' },
  { id: 105, text: 'Bulls of all sizes', uri: 'https://scontent-lax3-1.cdninstagram.com/t51.2885-15/e35/20688373_125147014784176_6899013509527371776_n.jpg', 
      description: 'Pictured: Child Size bull. Comes with Standard jumper. $6,500', imageProps: {resizeMode: 'contain'}, featuredTitle: '$6,500.00' },
  { id: 106, text: 'Brown Buffalo', uri: 'http://www.bullsandjumpers.com/wp-content/uploads/2013/10/20170223_150643-604x270.jpg', 
      description: 'Pictured: Large Buffalo with Deluxe jumper. $8,500', imageProps: {resizeMode: 'cover'}, featuredTitle: '$8,500.00' },
  { id: 107, text: 'Black Bull', uri: 'http://www.bullsandjumpers.com/wp-content/uploads/2016/12/image_20160527_134313_1464387991155-1-604x270.jpg', 
      description: 'Pictured: Regular Bull with Standard jumper. $7,500.', imageProps: {resizeMode: 'cover'}, featuredTitle: '$7,500.00' },
  { id: 108, text: 'Oversized Grey Bull', uri: 'https://scontent-lax3-1.cdninstagram.com/t51.2885-15/e35/17266159_1820574994935280_490861890885386240_n.jpg', 
      description: 'Pictured: Large Bull with Deluxe jumper. $7,500.', imageProps: {resizeMode: 'contain'}, featuredTitle: '$7,500.00' },
  { id: 109, text: 'Bulls of all colors and appearances', uri: 'https://scontent-lax3-1.cdninstagram.com/t51.2885-15/e35/22069644_1632113003486022_6796493052488712192_n.jpg', 
      description: 'Pictured: Regular Bulls come with Standard jumper. $7,500.', imageProps: {resizeMode: 'cover'}, featuredTitle: '$7,500.00' },
  { id: 110, text: 'Black Bull with Red Horns', uri: 'http://www.bullsandjumpers.com/wp-content/uploads/2016/12/20161008_095317_14759462633471-604x270.jpg', 
      description: 'Pictured: Regular Bull with Standard jumper. $7,500.', imageProps: {resizeMode: 'cover'}, featuredTitle: '$7,500.00' },
  { id: 118, text: 'Crazy Rides', uri: 'http://www.bullsandjumpers.com/wp-content/uploads/2013/10/toro-bravo-794x329.jpg', 
      description: 'We offer the best Bulls and jumpers. Click to call us for your reservation.', imageProps: {resizeMode: 'cover'} },
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
        featuredTitle={item.featuredTitle}
        featuredTitleStyle={{position: 'absolute', left: 5, bottom: 0, fontSize: 20 }}
      >
        <Text style={{marginBottom:10, textAlign:'center', fontSize:18}}>
          {item.description}
        </Text>
          <Button onPress={() => Communications.phonecall('8007703601', true)}
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