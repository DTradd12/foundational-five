import * as React from 'react';
import {StyleSheet} from 'react-native';

export const exerciseStyles = StyleSheet.create({
    mainContainer: {
        flex:1,
        flexDirection:'column',
        justifyContent:'flex-start',
    },
    pr:{
        justifyContent: 'center',
        alignItems:'center',
        color: 'white',
        paddingBottom:10
    },
    currentWorkout:{
        justifyContent: 'flex-start',
        alignItems:'center',
    },
    sets:{
        backgroundColor:'#454545',
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'space-evenly',
        padding: 5,
        marginBottom: 5,
        width:'90%',
        borderRadius:15,
        shadowOffset: {
            width: -4,
            height: 9
        },
        shadowOpacity: .8,
        shadowRadius: 2,
    },
    newSet:{
        flexDirection: 'row',
        justifyContent:'center',
        alignItems:'flex-start',
    },
    textInput: {
        color: 'black',
        backgroundColor: 'white',
        borderColor: "black",
        borderWidth: 2,
        justifyContent:'center',
        textAlign: 'center',
        width: "20%",
        height: 40
    },
    panelText:{
        fontFamily:'MarkerFelt-Wide',
        fontSize: 20,
        color: 'white',
        marginLeft:10,
        marginRight:10
    },
    button:{
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        backgroundColor:'#33347E',
    }
});
