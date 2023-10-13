import React from 'react';
import { Pressable, Text, View} from 'react-native';
import { globalStyles } from './GlobalStyles.js';

export function ResultsScreen({navigation}){
  return (
    <View style = {{flex: 1}}>
        <View style={{flex: .54, backgroundColor: 'black'}}>
            <Text style={{color: 'white', textAlign: 'center', fontSize: 40, marginTop: 70}} >
                Congratulations, you got X/Y correct!
            </Text>
        </View>

        <View style={{flex: .229, backgroundColor: 'yellow'}}>
        </View>

        <View style={{flex: 1, backgroundColor: 'yellow'}}>
            <View style={{flex: .13, flexDirection:"row", flexWrap:"wrap",justifyContent:"center"}}>
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
                    {({pressed}) => ( // names on the button
                      <Text style={{color: 'white', textAlign: 'center'}}> Play Again </Text>
                    )}
                </Pressable> 
            </View>

            <View style={{flex: .13, flexDirection:"row", flexWrap:"wrap",justifyContent:"center"}}>
                <Pressable
                    onPress={() => {
                        navigation.navigate("Select Screen");
                    }}
                    // the buttons
                    style={({pressed}) => [
                        {backgroundColor: pressed ? 'black' : 'black',},
                      globalStyles.wrapperCustom,
                    ]}
                >
                    {({pressed}) => ( // names on the button
                      <Text style={{color: 'white', textAlign: 'center'}}> Different Class </Text>
                    )}
                </Pressable> 
            </View>    
        </View>
    </View>
  ); 
} 