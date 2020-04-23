import React from 'react';
import {Text,View,TextInput,StyleSheet,TouchableOpacity} from 'react-native';

export default class WriteScreen extends React.Component{
    render(){
        return(
            <View style={{justifyContent:'center',flex:1,alignItems:'center'}}>
            <TextInput
                editable
                maxLength={200}
                multiline
                numberOfLines={4}
                selectionColor = '#0000f0'
                style={styles.inputBox}
            />
            <TouchableOpacity style={styles.submitButton}>
                <Text style={styles.letButton}>Submit</Text>
                </TouchableOpacity>
            <Text>Write your Story</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    inputBox:{
        width:"90%",
        height:"70%",
        borderWidth: 2,
      },
    submitButton:{
        width:"50%",
        height:55,
        margin:10,
        padding:10,
        alignItems:'center',
    },
    letButton:{
        textAlign:'center',
        fontSize:25,
        fontWeight:'bold',
    }
})