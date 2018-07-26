import React, { Component } from 'react';
import { View, Text,TextInput,StyleSheet,Picker,Keyboard } from 'react-native';

export default class TextInputAddNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title:'',
      description:''
    };
  }
  setTextFieldValue = (titleData,descriptionData) => {
    this.state.title=titleData
    this.state.description=descriptionData
    this.props.getTextFieldsValue(titleData,descriptionData);
}
renderTextFieldTitle(){
  console.log('Edit title'+this.props.editTitle)
  if(this.props.editTitle != null)
  return <TextInput
  style={styles.title}
  onChangeText={(text) => this.setTextFieldValue(text,this.state.description)}
  placeholder='Title'
  defaultValue={this.props.editTitle}
  maxLength={60}
  multiline={false}
  returnKeyType='done'
  onSubmitEditing={Keyboard.dismiss}
/>
  return <TextInput
  style={styles.title}
  onChangeText={(text) => this.setTextFieldValue(text,this.state.description)}
  placeholder='Title'
  maxLength={60}
  multiline={false}
  returnKeyType='done'
  onSubmitEditing={Keyboard.dismiss}
/>;
}
renderTextFieldDescription(){
  if(this.props.description != null)
  return <TextInput
  style={styles.description}
  onChangeText={(text) => this.setTextFieldValue(this.state.title,text)}
  placeholder='Description'
  defaultValue={this.props.description}
  multiline={true}
  onSubmitEditing={Keyboard.dismiss}
/>
  return <TextInput
  style={styles.description}
  onChangeText={(text) => this.setTextFieldValue(this.state.title,text)}
  placeholder='Description'
  multiline={true}
  onSubmitEditing={Keyboard.dismiss}
/>
}
  render() {
    return (
        <View style={styles.container}>
        <View style={styles.titleView}>
        { this.renderTextFieldTitle() }
        </View>
        { this.renderTextFieldDescription() }
      </View>
      
    );
  }
}
const styles = StyleSheet.create({
    container: {
      padding: 20,
    },
    titleView:
    {
        paddingBottom: 20,
    },
    title: {
        height: 50, 
        borderColor: 'green',
        borderWidth: 1,
        paddingBottom:20
    },
    description: {
        height: 100, 
        borderColor: 'green',
        borderWidth: 1,
        textAlignVertical: "top"
    },
    titleView:
    {
        paddingBottom: 20,
    },
    picker: {
        height: 100, 
        color: 'green',
        borderWidth: 1
    },
  });