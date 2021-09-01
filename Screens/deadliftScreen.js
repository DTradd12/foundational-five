import * as React from 'react';
import {Alert, Button, FlatList, ImageBackground, Text, TextInput, TouchableOpacity, View} from "react-native";
import {exerciseStyles} from "../Styles/exerciseStyles";
import {useState} from "react";
import {CheckBox} from 'react-native-elements'
import {useDispatch, useSelector} from "react-redux";
import {selectPastDeadlistWorkouts, setDeadliftWorkout} from "../slices/workoutHistorySlice";
import {useNavigation} from "@react-navigation/native";

export function deadliftScreen(props) {
    const [repText, setRepText] = useState(undefined);
    const [weightText, setWeightText] = useState(undefined);
    const [pr, setPr] = useState(0);
    const [sets, setSets] = useState([]);
    const [isVisable, setIsVisable] = useState(false);
    const [reload, setReload] = useState(false);

    const dispatch = useDispatch();

    const navigation = useNavigation();

    const pastDeadliftWorkouts = useSelector(selectPastDeadlistWorkouts)

    const renderSetAddition = () => {
        setIsVisable(!isVisable);
    }

    const addSet = () => {
        if (repText === undefined || weightText === undefined){
            Alert.alert(
                "Error",
                "Reps/Weight cannot be empty!",
                [{text: "Try Again"}]
            )
        } else {
            const newSets = sets;
            const newSet = {
                reps: repText,
                weight: weightText,
                checked: false,
            }
            newSets.push(newSet);

            setSets(newSets);

            setRepText(undefined);
            setWeightText(undefined);

            renderSetAddition();
        }
    }

    const completeSet = (index) => {
        const newSets = sets;
        newSets[index].checked = !newSets[index].checked;
        setSets(newSets);
        // Using this until I figure out some better way to trigger a reload.
        // TLDR; setSets isn't triggering reload because of what I assume is it not seeing changes within indivudual object
        setReload(!reload);
    }

    const deleteSet = (index) => {
        const sets = sets;
        sets.splice(index,1)
        setSets(sets);
    }

    const prComponent =
        <View>
            <Text style={exerciseStyles.panelText}>Current PR: {pr}</Text>
        </View>

    const setComponent =
        <FlatList
            contentContainerStyle={exerciseStyles.currentWorkout}
            data={sets}
            keyExtractor={(item, index) => item + index}
            renderItem={({item, index}) => {
                return (
                    <View style={exerciseStyles.sets}>
                        <Text style={exerciseStyles.panelText}>Set: {index + 1}</Text>
                        <Text style={exerciseStyles.panelText}>Reps: {item.reps}</Text>
                        <Text style={exerciseStyles.panelText}>Weight: {item.weight}</Text>
                        <CheckBox
                            key={item + index + "checkbox"}
                            checked={item.checked}
                            onPress={() => completeSet(index)}
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
                            onPress={() => deleteSet(index)}
                        />
                    </View>
                )}
            }
        />

    const newSet =
        <View style={exerciseStyles.newSet}>
            {!isVisable?<TouchableOpacity style={exerciseStyles.button} onPress={renderSetAddition}><Text style={exerciseStyles.panelText}>Add Set</Text></TouchableOpacity>:null}
            {isVisable?<TextInput style={exerciseStyles.textInput} keyboardType={"number-pad"} onChangeText={setRepText} placeholder="Reps"/>:null}
            {isVisable?<TextInput style={exerciseStyles.textInput} keyboardType={"number-pad"} onChangeText={setWeightText} placeholder="Weight"/>:null}
            {isVisable?<TouchableOpacity style={exerciseStyles.button} onPress={addSet}><Text style={exerciseStyles.panelText}>Confirm</Text></TouchableOpacity>:null}
            {isVisable?<TouchableOpacity style={exerciseStyles.button} onPress={renderSetAddition}><Text style={exerciseStyles.panelText}>Cancel</Text></TouchableOpacity>:null}
        </View>

    const finishWorkout =
        <View>
            <Button
                title="Finish Workout"
                fetchDetails={true}
                onPress={() => {
                    dispatch(
                        setDeadliftWorkout({
                            sets
                        })
                    );
                    navigation.navigate('Foundational 5');
                }
            }/>
        </View>

    return (
        <ImageBackground source={{uri:'https://i.pinimg.com/474x/83/6f/5d/836f5d040eabd08f33c9d9e44615cadf.jpg'}} style={{width:'100%', height:'100%'}}>
            <View style={[exerciseStyles.pr,exerciseStyles.panelText]}>
                {prComponent}
            </View>
            <View style={exerciseStyles.currentWorkout}>
                <Text style={[exerciseStyles.panelText, {paddingBottom:10}]}>Total Sets: {sets.length}</Text>
                {setComponent}
                {newSet}
                {finishWorkout}
            </View>
        </ImageBackground>
    )
}

