import React from 'react';
import { Pressable, Text, View} from 'react-native';
import { globalStyles } from './GlobalStyles.js';

export function SelectScreen({navigation}){
  return (
    <View style = {{flex: 1}}>
        <View style={{flex: .54, backgroundColor: 'black'}}> 
            <Text style={{color: 'white', textAlign: 'center', fontSize: 50, marginTop: 80}} >
                Select a Class
            </Text>
        </View>
        <View style={{flex: .229, backgroundColor: 'yellow'}}>
        </View>

        <View style={{flex: 1, backgroundColor: 'yellow'}}>
            <View style={{flex: .13, flexDirection:"row", flexWrap:"wrap",justifyContent:"center"}}>
                <Pressable
                    onPress={() => {
                      navigation.navigate("Study Screen");
                    }}
                    // the buttons
                    style={({pressed}) => [
                        {backgroundColor: pressed ? 'black' : 'black',},
                        globalStyles.wrapperCustom,
                    ]}
                >
                    {({pressed}) => ( // names on the button
                      <Text style={{color: 'white', textAlign: 'center'}}> CMSC 100 </Text>
                    )}
                </Pressable> 
            </View>

            <View style={{flex: .13, flexDirection:"row", flexWrap:"wrap",justifyContent:"center"}}>
                <Pressable
                    onPress={() => {
                        navigation.navigate("Study Screen");
                    }}
                    // the buttons
                    style={({pressed}) => [
                        {backgroundColor: pressed ? 'black' : 'black',},
                      globalStyles.wrapperCustom,
                    ]}
                >
                    {({pressed}) => ( // names on the button
                      <Text style={{color: 'white', textAlign: 'center'}}> CMSC 101 </Text>
                    )}
                </Pressable> 
            </View>

            <View style={{flex: .13, flexDirection:"row", flexWrap:"wrap",justifyContent:"center"}}>
                <Pressable
                    onPress={() => {
                      navigation.navigate("Study Screen");
                    }}
                    // the buttons
                    style={({pressed}) => [
                        {backgroundColor: pressed ? 'black' : 'black',},
                      globalStyles.wrapperCustom,
                    ]}
                >
                    {({pressed}) => ( // names on the button
                      <Text style={{color: 'white', textAlign: 'center'}}> CMSC 102 </Text>
                    )}
                </Pressable> 
            </View>
            
            <View style={{flex: .13, flexDirection:"row", flexWrap:"wrap",justifyContent:"center"}}>
                <Pressable
                    onPress={() => {
                        navigation.navigate("Study Screen");
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
                        <Text style={{color: 'white', textAlign: 'center'}}> CMSC 103 </Text>
                    )}
                </Pressable> 
            </View>    
        </View>
    </View>
  ); 
} 