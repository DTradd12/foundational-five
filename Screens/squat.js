import * as React from 'react';
import {Text, View} from "react-native";
import {homePageStyles} from "../Styles/homePageStyles";
import {Component} from "react";

export class Squat extends Component {
    render() {
        return (
            <View style={homePageStyles.mainContainer}>
                <Text>This is the squat page.</Text>
            </View>
        )
    }
}
