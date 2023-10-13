import React from 'react';
import { Pressable, ScrollView, SafeAreaView, Text, View, Image } from 'react-native';
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

export function StudyScreen({navigation}) {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={globalStyles.container}>
            <Pressable
                onPress={() => {
                  navigation.navigate("Game Screen");
                }}
                // the buttons
                style={({pressed}) => [
                    {backgroundColor: pressed ? 'black' : 'black',},
                    globalStyles.wrapperCustom,
                ]}
            >
                {({pressed}) => ( // words on the button
                  <Text style={{color: 'white', textAlign: 'center'}}> Start Game </Text>
                )}
            </Pressable>  

          <Text>{database[0].notes}</Text>
          <Image style={{width:50, height:50}} source={require("../assets/Zoro.jpg")} />
          <Text>{database[0].name}</Text>  
          <Image style={{width:50, height:50}} source={require("../assets/Goku.png")} />
          <Text>{database[1].name}</Text>
          <Image style={{width:50, height:50}} source={require("../assets/Vegeta.png")} />
          <Text>{database[2].name}</Text>
          <Image style={{width:50, height:50}} source={require("../assets/Trunks.png")} />
          <Text>{database[3].name}</Text>
          <Image style={{width:50, height:50}} source={require("../assets/Tanjiro.png")} />
          <Text>{database[4].name}</Text>
          <Image style={{width:50, height:50}} source={require("../assets/Spike.png")} />
          <Text>{database[5].name}</Text>
          <Image style={{width:50, height:50}} source={require("../assets/Shinra.png")} />
          <Text>{database[6].name}</Text>
          <Image style={{width:50, height:50}} source={require("../assets/Reigan.png")} />
          <Text>{database[7].name}</Text>
          <Image style={{width:50, height:50}} source={require("../assets/Mugen.png")} />
          <Text>{database[8].name}</Text>
          <Image style={{width:50, height:50}} source={require("../assets/Mob.png")} />
          <Text>{database[9].name}</Text>
          <Image style={{width:50, height:50}} source={require("../assets/Light.png")} />
          <Text>{database[10].name}</Text>
          <Image style={{width:50, height:50}} source={require("../assets/L.png")} />
          <Text>{database[11].name}</Text>
          <Image style={{width:50, height:50}} source={require("../assets/Killua.png")} />
          <Text>{database[12].name}</Text>
          <Image style={{width:50, height:50}} source={require("../assets/Jin.png")} />
          <Text>{database[13].name}</Text>
          <Image style={{width:50, height:50}} source={require("../assets/Jet.jpg")} />
          <Text>{database[14].name}</Text>
          <Image style={{width:50, height:50}} source={require("../assets/Gon.png")} />
          <Text>{database[15].name}</Text>
          <Image style={{width:50, height:50}} source={require("../assets/Fuu.png")} />
          <Text>{database[16].name}</Text>
          <Image style={{width:50, height:50}} source={require("../assets/Faye.png")} />
          <Text>{database[17].name}</Text>
          <Image style={{width:50, height:50}} source={require("../assets/Dandy.png")} />
          <Text>{database[18].name}</Text>
          <Image style={{width:50, height:50}} source={require("../assets/Arthur.png")} />
          <Text>{database[19].name}</Text>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
