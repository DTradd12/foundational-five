import * as React from 'react';
import {Alert, ImageBackground, ScrollView, Text, TextInput, TouchableOpacity, View} from "react-native";
import {exerciseStyles} from "../Styles/exerciseStyles";
import {Component} from "react";
import {CheckBox} from 'react-native-elements'

export class deadLift extends Component {
    state = {
        repText: undefined,
        weightText: undefined,
        pr: 0,
        sets:[],
        checked:false,
    }

    constructor(props) {
        super(props);
        this.state = {
            repText: undefined,
            weightText: undefined,
            pr: 0,
            sets: [],
            isVisable: false,
            checked:false,
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
        if (this.state.sets === undefined || this.state.weightText === undefined){
            Alert.alert(
                "Error",
                "Reps/Weight cannot be empty!",
                [{text: "Try Again"}]
            )
        } else {
            const sets = this.state.sets;
            const newSet = {
                reps: this.state.repText,
                weight: this.state.weightText,
                checked: false,
            }
            sets.push(newSet);
            this.setState({
                repText:undefined,
                weightText:undefined,
                sets: sets});
            this.renderSetAddition();
        }
    }

    completeSet = (index) => {
        const sets = this.state.sets;
        sets[index].checked = !sets[index].checked;
        this.setState({sets:sets});
    }

    deleteSet = (index) => {
        const sets = this.state.sets;
        sets.splice(index,1)
        this.setState({sets:sets});
    }

    render() {
        const pr =
            <View>
                <Text style={exerciseStyles.panelText}>Current PR: {this.state.pr}</Text>
            </View>

        const setsList = this.state.sets.map((data, index) => {
                return (
                    <View style={exerciseStyles.sets}>
                        <Text style={exerciseStyles.panelText} key={index}>Set: {index + 1}</Text>
                        <Text style={exerciseStyles.panelText} key={data.reps + index}>Reps: {data.reps}</Text>
                        <Text style={exerciseStyles.panelText} key={data.weight + index}>Weight: {data.weight}</Text>
                        <CheckBox
                            key={data.checked + index}
                            checked={this.state.sets[index].checked}
                            onPress={() => this.completeSet(index)}
                            iconRight={true}
                            checkedTitle="Complete"
                        />
                        <CheckBox
                            key={"Delete Set" + index}
                            center
                            iconRight
                            iconType='material'
                            checkedIcon='clear'
                            checkedColor='red'
                            checked={true}
                            onPress={() => this.deleteSet(index)}
                        />
                    </View>
                )
            })

        const newSet =
                <View style={exerciseStyles.newSet}>
                    {!this.state.isVisable?<TouchableOpacity style={exerciseStyles.button} onPress={this.renderSetAddition}><Text style={exerciseStyles.panelText}>Add Set</Text></TouchableOpacity>:null}
                    {this.state.isVisable?<TextInput style={exerciseStyles.textInput} keyboardType={"number-pad"} onChangeText={this.handleRepText} placeholder="Reps"/>:null}
                    {this.state.isVisable?<TextInput style={exerciseStyles.textInput} keyboardType={"number-pad"} onChangeText={this.handleWeightText} placeholder="Weight"/>:null}
                    {this.state.isVisable?<TouchableOpacity style={exerciseStyles.button} onPress={this.addSet}><Text style={exerciseStyles.panelText}>Confirm</Text></TouchableOpacity>:null}
                    {this.state.isVisable?<TouchableOpacity style={exerciseStyles.button} onPress={this.renderSetAddition}><Text style={exerciseStyles.panelText}>Cancel</Text></TouchableOpacity>:null}
                </View>

        return (
            <ImageBackground source={{uri:'https://i.pinimg.com/474x/83/6f/5d/836f5d040eabd08f33c9d9e44615cadf.jpg'}} style={{width:'100%', height:'100%'}}>
                <ScrollView
                    contentContainerStyle={exerciseStyles.mainContainer}
                >
                    <View style={[exerciseStyles.pr,exerciseStyles.panelText]}>
                        {pr}
                    </View>
                    <View style={exerciseStyles.currentWorkout}>
                        <Text style={[exerciseStyles.panelText, {paddingBottom:10}]}>Total Sets: {this.state.sets.length}</Text>
                        {setsList}
                        {newSet}
                    </View>
                </ScrollView>
            </ImageBackground>
        )
    }
}
