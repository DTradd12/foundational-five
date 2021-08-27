import * as React from 'react';
import {Image, ImageBackground, ScrollView, Text, TouchableOpacity, View} from "react-native";
import {homePageStyles} from "../Styles/homePageStyles";
import {deadLift} from "./deadLift";
import {Squat} from "./squat";
import {BarbellRow} from "./barbellRow";
import {ShoulderPress} from "./shoulderPress";
import {BenchPress} from "./benchPress";

export function homeScreen({navigation}) {
    return (
        <ImageBackground source={{uri:'https://i.pinimg.com/474x/83/6f/5d/836f5d040eabd08f33c9d9e44615cadf.jpg'}} style={{width:'100%', height:'100%'}}>
            <ScrollView contentContainerStyle={homePageStyles.mainContainer}>
                <TouchableOpacity style={homePageStyles.exercisePanel} onPress={() => navigation.navigate('Dead Lift', deadLift)}>
                    <ImageBackground
                        source={{uri:'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/deadlift-workout-for-back-royalty-free-image-527680187-1553003041.jpg'}}
                        style={{width:'100%', height:'100%'}}
                        imageStyle={homePageStyles.imageBackground}
                    >
                        <Text style={homePageStyles.panelText}>DEAD</Text>
                        <Text style={homePageStyles.panelText}>LIFT</Text>
                    </ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity style={homePageStyles.exercisePanel} onPress={() => navigation.navigate('Squat', Squat)}>
                    <ImageBackground
                        source={{uri:'https://barbend.com/wp-content/uploads/2016/11/BarBend-Feature-Image-1200-x-675-2021-04-29T131620.369.jpg'}}
                        style={[{width:'100%', height:'100%'},homePageStyles.shiftedImage]}
                        imageStyle={homePageStyles.imageBackground}
                    >
                        <Text style={[homePageStyles.panelText,homePageStyles.shiftedImage]}>SQUAT</Text>
                    </ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity style={homePageStyles.exercisePanel} onPress={() => navigation.navigate('Barbell Row', BarbellRow)}>
                    <ImageBackground
                        source={{uri:'https://barbend.com/wp-content/uploads/2020/02/BarBend-Feature-Image-1200-x-675-2021-03-30T144523.877.jpg'}}
                        style={[{width:'100%', height:'100%'},homePageStyles.shiftedImage]}
                        imageStyle={homePageStyles.imageBackground}
                    >
                        <Text style={[homePageStyles.panelText,homePageStyles.shiftedImage]}>BARBELL</Text>
                        <Text style={[homePageStyles.panelText,homePageStyles.shiftedImage]}>ROW</Text>
                    </ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity style={homePageStyles.exercisePanel} onPress={() => navigation.navigate('Shoulder Press', ShoulderPress)}>
                    <ImageBackground
                        source={{uri:'https://www.t-nation.com/wp-content/uploads/2018/08/Develop-the-Ultimate-Overhead-Press.jpeg'}}
                        style={{width:'100%', height:'100%'}}
                        imageStyle={homePageStyles.imageBackground}
                    >
                        <Text style={homePageStyles.panelText}>SHOULDER</Text>
                        <Text style={homePageStyles.panelText}>PRESS</Text>
                    </ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity style={homePageStyles.exercisePanel} onPress={() => navigation.navigate('Bench Press', BenchPress)}>
                    <ImageBackground
                        source={{uri:'https://blog.nasm.org/hubfs/bench-press-biomechanics.jpg'}}
                        style={{width:'100%', height:'100%'}}
                        imageStyle={homePageStyles.imageBackground}
                    >
                        <Text style={homePageStyles.panelText}>BENCH</Text>
                        <Text style={homePageStyles.panelText}>PRESS</Text>
                    </ImageBackground>
                </TouchableOpacity>
            </ScrollView>
        </ImageBackground>
    );
}
