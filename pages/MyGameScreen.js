import React, {useState} from 'react';
import { Pressable, ScrollView, SafeAreaView, Text, View, Image, Modal } from 'react-native';
import { globalStyles } from './GlobalStyles.js';

var database = [
  {id:"0", name:"Roronoa Zoro",image:require("../assets/Zoro.jpg"),notes:"The GOAT!"},
  {id:"1", name:"Goku",image:require("../assets/Goku.png")},
  {id:"2", name:"Vegeta",image:require("../assets/Vegeta.png")},
  {id:"3", name:"Trunks",image:require("../assets/Trunks.png")},
  {id:"4", name:"Tanjiro Kamado",image:require("../assets/Tanjiro.png")},
  {id:"5", name:"Spike Spiegal",image:require("../assets/Spike.png")},
  {id:"6", name:"Shinra",image:require("../assets/Shinra.png")},
  {id:"7", name:"Reigan",image:require("../assets/Reigan.png")},
  {id:"8", name:"Mugen",image:require("../assets/Mugen.png")},
  {id:"9", name:"Mob",image:require("../assets/Mob.png")},
  {id:"10", name:"Light Yagami",image:require("../assets/Light.png")},
  {id:"11", name:"L Lawliet",image:require("../assets/L.png")},
  {id:"12", name:"Killua Zoldyck",image:require("../assets/Killua.png")},
  {id:"13", name:"Jin",image:require("../assets/Jin.png")},
  {id:"14", name:"Jet",image:require("../assets/Jet.jpg")},
  {id:"15", name:"Gon Freecss",image:require("../assets/Gon.png")},
  {id:"16", name:"Fuu",image:require("../assets/Fuu.png")},
  {id:"17", name:"Faye",image:require("../assets/Faye.png")},
  {id:"18", name:"Dandy Everett",image:require("../assets/Dandy.png")},
  {id:"19", name:"Arthur",image:require("../assets/Arthur.png")},
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
          backgroundColor: pressed ? 'black' : 'black',
        },
        globalStyles.wrapperCustom,
      ]}
    >
      {({pressed}) => ( // names on the button
        <Text style={{color: 'white', textAlign: 'center'}}>{ props.name }</Text>
      )}
  </Pressable>        
  );
}

export function GameScreen({navigation}) {
  const [ imageId, setImageId ] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [ guess, setGuess ] = useState( imageId );

  function checkAnswer( i ){
      setGuess( i );
          if (imageId==i){
              setModalVisible( false );
              setImageId( Math.floor(Math.random() * database.length ) );
          } else {
              setModalVisible( true );
          }
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={globalStyles.container}>
            <Pressable
                onPress={() => {
                  navigation.navigate("Results Screen");
                }}
                // the buttons
                style={({pressed}) => [
                    {backgroundColor: pressed ? 'black' : 'black',},
                    globalStyles.wrapperCustom,
                ]}
            >
                {({pressed}) => ( // names on the button
                  <Text style={{color: 'white', textAlign: 'center'}}> End Game </Text>
                )}
            </Pressable>  

            <Image style={globalStyles.cartoon} source={database[imageId].image} />
            <Text>{database[imageId].notes}</Text>

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
                        <MyButton onPressed={()=>checkAnswer( item.id )} key={item.id} name={item.name} id={item.id} />
                    );
                })}
            </View>   
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
