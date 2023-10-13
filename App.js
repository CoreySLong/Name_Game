// Note: I didn't comment my code too much due to not being able to legally place comments where I normally would  

import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import  {createStackNavigator}  from '@react-navigation/stack';
import  {GameScreen}  from "./pages/MyGameScreen.js";
import  {LoginScreen} from "./pages/LoginScreen.js";
import  {SelectScreen} from "./pages/SelectClassScreen.js";
import  {ResultsScreen} from "./pages/ResultsScreen.js";
import  {StudyScreen} from "./pages/StudyScreen.js";

const Stack = createStackNavigator();

export default function App() {
  return(
    <NavigationContainer>
      <StatusBar/>
      <Stack.Navigator>
        <Stack.Screen
          name="Login Screen"
          component={LoginScreen}
        />
        <Stack.Screen
          name="Select Screen"
          component={SelectScreen}
        />
        <Stack.Screen
          name="Study Screen"
          component={StudyScreen}
        />
        <Stack.Screen
          name="Game Screen"
          component={GameScreen}
        />
        <Stack.Screen
          name="Results Screen"
          component={ResultsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
