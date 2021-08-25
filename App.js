import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Component} from "react";
import {deadLift} from "./Screens/deadLift";
import {homeScreen} from "./Screens/homeScreen";
import {Squat} from "./Screens/squat";
import {BenchPress} from "./Screens/benchPress";
import {ShoulderPress} from "./Screens/shoulderPress";
import {BarbellRow} from "./Screens/barbellRow";

const Stack = createNativeStackNavigator();

class App extends Component{
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Foundational 5" component={homeScreen} />
                    <Stack.Screen name="Dead Lift" component={deadLift}/>
                    <Stack.Screen name="Squat" component={Squat}/>
                    <Stack.Screen name="Bench Press" component={BenchPress}/>
                    <Stack.Screen name="Shoulder Press" component={ShoulderPress}/>
                    <Stack.Screen name="Barbell Row" component={BarbellRow}/>
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}


export default App;
