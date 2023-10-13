import React, {useState} from 'react';
import { Pressable, StyleSheet, Text, View, Image, Modal } from 'react-native';
import { Card } from 'react-native-elements';
import { globalStyles } from './GlobalStyles.js';

var database = [
  {id:"0", name:"Roronoa Zoro",image:require("../assets/Zoro.jpg"),notes:"The GOAT!"},
  {id:"1", name:"Goku",image:require("../assets/Goku.png")},
  {id:"2", name:"Vegeta",image:require("../assets/Vegeta.png"), notes:"The Prince of all Saiyans!"},
  {id:"3", name:"Trunks",image:require("../assets/Trunks.png")},
  {id:"4", name:"Tanjiro Kamado",image:require("../assets/Tanjiro.png")},
  {id:"5", name:"Spike Spiegal",image:require("../assets/Spike.png")}
];

function MyButton( props ){
  return (
   <Pressable
      onPress={() => {
        props.onPressed();
      }}
      // the buttons
      style={({pressed}) => [
        {
          backgroundColor: pressed ? 'darkcyan' : 'cyan',
        },
        globalStyles.wrapperCustom,
      ]}
    >
      {({pressed}) => ( // names on the button
        <Text style={globalStyles.text}>{ props.name }</Text>
      )}
  </Pressable>        
  );
}

export function GameScreen() {
  const [timesPressed, setTimesPressed ] = useState(0);
  const [ imageId, setImageId ] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [ guess, setGuess ] = useState( imageId );

  function DoMe( i ){
    setGuess( i );
    if (imageId==i){
      setModalVisible( false );
      setImageId( Math.floor(Math.random() * database.length ) );
    } else {
      setModalVisible( true );
    }
  }
  
  return (
    <View style={globalStyles.container}>
      <Card>
        <Image style={globalStyles.cartoon} source={database[imageId].image} />
        <Text>{database[imageId].notes}</Text>
      </Card>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
      }}>
        <View style={globalStyles.centeredView}>
          <View style={globalStyles.modalView}>
            <Text style={globalStyles.modalText}>Sorry, {database[guess].name} is incorrect!</Text>
            <Pressable
              style={[globalStyles.button, globalStyles.buttonClose]}
              onPress={() => {
                 setModalVisible(!modalVisible);
              } }>
              <Text style={globalStyles.textStyle}>Try Again!</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <View style={{flex: 0, flexDirection:"row", flexWrap:"wrap",justifyContent:"center"}}>
          { database.map( (item)=>{
              return (
              <MyButton onPressed={()=>DoMe( item.id )} key={item.id} name={item.name} id={item.id} />
              );
          })}
      </View>
    </View>
  );
}
