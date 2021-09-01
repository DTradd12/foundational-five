import * as React from 'react';
import {ImageBackground, ScrollView, Text, TouchableOpacity} from "react-native";
import {homePageStyles} from "../Styles/homePageStyles";
import {deadliftScreen} from "./deadliftScreen";
import {useNavigation} from '@react-navigation/native';


export const HomeScreen = () => {
    const navigation = useNavigation();

    return (
        <ImageBackground source={{uri:'https://i.pinimg.com/474x/83/6f/5d/836f5d040eabd08f33c9d9e44615cadf.jpg'}} style={{width:'100%', height:'100%'}}>
            <ScrollView contentContainerStyle={homePageStyles.mainContainer}>
                <TouchableOpacity style={homePageStyles.exercisePanel} onPress={() => navigation.navigate('Dead Lift', deadliftScreen)}>
                    <ImageBackground
                        source={{uri:'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/deadlift-workout-for-back-royalty-free-image-527680187-1553003041.jpg'}}
                        style={{width:'100%', height:'100%'}}
                        imageStyle={homePageStyles.imageBackground}
                    >
                        <Text style={homePageStyles.panelText}>DEAD</Text>
                        <Text style={homePageStyles.panelText}>LIFT</Text>
                    </ImageBackground>
                </TouchableOpacity>
            </ScrollView>
        </ImageBackground>
    );
}
