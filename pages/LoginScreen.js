import React from 'react';
import { TextInput, Pressable, Text, View, Image} from 'react-native';
import { globalStyles } from './GlobalStyles.js';

export function LoginScreen({navigation}){
  return (
    <View style={{flex:1}}>
      <Image 
        style={globalStyles.heroImage} source={require("../assets/vcu.png")}  
      />

      <View style={globalStyles.container}>
        <Text>
          Username
        </Text>

        <TextInput
          style = {{height: 40,
            width: 200,
            borderColor: 'black',
            borderWidth: 1,
            textAlign: 'center'}}
          placeholder="VCU"
        />

        <Text>
          Password
        </Text>

        <TextInput
          style = {{height: 40,
            width: 200,
            borderColor: 'black',
            borderWidth: 1,
            textAlign: 'center'}}
          placeholder="RAMS"
        />

        <Pressable
          onPress={() => {
            navigation.navigate("Select Screen");
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
            <Text style={{color: 'white', textAlign: 'center'}}> Login </Text>
          )}
        </Pressable> 
      </View>
    </View>
  ); 
} 