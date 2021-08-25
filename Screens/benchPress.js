import * as React from 'react';
import {Text, View} from "react-native";
import {homePageStyles} from "../Styles/homePageStyles";
import {Component} from "react";

export class BenchPress extends Component {
    render() {
        return (
            <View style={homePageStyles.mainContainer}>
                <Text>This is the bench press page.</Text>
            </View>
        )
    }
}
