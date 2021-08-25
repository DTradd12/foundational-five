import * as React from 'react';
import {StyleSheet} from 'react-native';

export const homePageStyles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        flexDirection:'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    exercisePanel:{
        width: '50%',
        height: '15%',
        alignItems: 'center',
        justifyContent: 'center',
        shadowOffset: {
            width: -4,
            height: 9
        },
        shadowOpacity: .8,
        shadowRadius: 2,
    },
    imageBackground:{
        height:'100%',
        width:'100%',
        borderRadius:15,
        opacity:.7
    },
    shiftedImage: {
        transform:[{
            rotateY: '180deg'
        }]
    },
    panelText:{
        fontFamily:'MarkerFelt-Wide',
        fontSize: 30,
        color: 'white',
        marginTop:5,
        marginLeft:10,
        marginRight:10
    }
});
