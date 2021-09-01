import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {deadliftScreen} from "./Screens/deadliftScreen";
import 'react-native-gesture-handler';
import {HomeScreen} from "./Screens/homeScreen";
import {SafeAreaProvider} from "react-native-safe-area-context/src/SafeAreaContext";
import {StatusBar} from "expo-status-bar";
import {Provider} from "react-redux";
import {store} from "./stores/store";

export default function App() {
    const Stack = createNativeStackNavigator();
    return (
        <Provider store={store}>
            <NavigationContainer>
                <SafeAreaProvider>
                    <StatusBar barStyle="dark-content" />
                    <Stack.Navigator>
                        <Stack.Screen name="Foundational 5" component={HomeScreen} options={{headerShown: false}}/>
                        <Stack.Screen name="Dead Lift" component={deadliftScreen} />
                    </Stack.Navigator>
                </SafeAreaProvider>
            </NavigationContainer>
        </Provider>
    );
}
