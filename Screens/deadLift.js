import * as React from 'react';
import {Button, Text, TextInput, View} from "react-native";
import {exerciseStyles} from "../Styles/exerciseStyles";
import {Component} from "react";

export class deadLift extends Component {
    state = {
        repText: undefined,
        weightText: undefined,
        pr: 0,
        sets:[],
    }

    constructor(props) {
        super(props);
        this.state = {
            repText: undefined,
            weightText: undefined,
            pr: 0,
            sets: [],
            isVisable: false,
        };
    }

    renderSetAddition = () => {
        this.setState({
            isVisable:!this.state.isVisable
        })
    }

    handleRepText = (text) => {
        this.setState({repText: text});
    }

    handleWeightText = (text) => {
        this.setState({weightText: text});
    }

    addSet = () => {
        const sets = this.state.sets;
        const newSet = {
            reps: this.state.repText,
            weight: this.state.weightText,
        }
        sets.push(newSet);
        this.setState({sets: sets});
        this.renderSetAddition();
    }

    render() {
        const setsList = this.state.sets.map((data, index) => {
                return (
                    <View>
                        <Text key={index}>Set:{index + 1}</Text>
                        <Text key={index}>Reps: {data.reps}</Text>
                        <Text key={index}>Weight: {data.weight}</Text>
                    </View>
                )
            })

        const newSet =
                <View>
                    <Button title="Add Set" onPress={this.renderSetAddition}>Add Set</Button>
                    <View>
                        {this.state.isVisable?<TextInput keyboardType={"number-pad"} onChangeText={this.handleRepText} placeholder="Reps"/>:null}
                        {this.state.isVisable?<TextInput keyboardType={"number-pad"} onChangeText={this.handleWeightText} placeholder="Weight"/>:null}
                        {this.state.isVisable?<Button title="Confirm" onPress={this.addSet}>Confirm</Button>:null}
                    </View>
                </View>

        return (
            <View style={exerciseStyles.mainContainer}>
                <Text>Total Sets: {this.state.sets.length}</Text>
                {setsList}
                {newSet}
            </View>
        )
    }
}
