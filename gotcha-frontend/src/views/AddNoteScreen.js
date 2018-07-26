import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator,Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';
import TextInputAddNote from '../component/TextInput'
import PickerView from '../component/PickerView'
import { BASE_URL } from '../config/global'

export default class AddNoteScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pickerValue: '',
      title: '',
      description: ''

    };
  }
  setPickerValue(pickerData) {
    this.setState({ pickerValue: pickerData });
  }
  setTextFieldsValue(titleData, descriptionData) {
    this.setState(
      {
        title: titleData,
        description: descriptionData
      }
    );
  }
  
  addEditNote() {
    var apiName = `${BASE_URL}?format=json`
    var apiMethod = 'POST'
    var title = this.state.title
    var description = this.state.description
    var color = this.state.pickerValue
    console.log('title:' + title + ' description:' + description + ' color ' + color)
    if (this.state.title == '') {
      title = this.props.noteTitle
    }

    if (this.state.description == '') {
      description = this.props.description
    }
    if (this.state.pickerValue == '') {
      color = this.props.color
    }
    if (this.props.noteTitle != null) {
      apiName = `${BASE_URL}${this.props.id}/?format=json`
      apiMethod = 'PUT'
    }
    if (title == '' || title == null) {
      alert('Please insert title')
      return
    } 
    else if (description == '' || description == null) {
      alert('Please insert description')
      return
    } 
    else if (color == '' || color == null) {
      alert('Please select color')
      return
    } 

    this.setState({
      isLoading: true,
    })

    let data = {
      method: apiMethod,
      body: JSON.stringify({
        title: title,
        details: description,
        color: color
      }),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    }
    console.log('data:' + data)

    return fetch(apiName, data)
      .then((responseJson) => {
        console.log(responseJson)
        this.setState({
          isLoading: false,
        }, function () {
          Actions.pop({ refresh: { update: 'title:' + title + ' description:' + description + ' color: ' + color }})

        });

      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.activityIndicatorContainer}>
          <ActivityIndicator
            color='white'
            size="large"
          />
        </View>
      )
    }
    return (
      <View>
        <TextInputAddNote editTitle={this.props.noteTitle} description={this.props.description} getTextFieldsValue={(titleData, desciptionData) => this.setTextFieldsValue(titleData, desciptionData)} />
        <PickerView getPickerValue={(pickVal) => this.setPickerValue(pickVal)} />
        <View style={styles.viewAddNoteContainer}>
          <TouchableOpacity
            style={styles.addNoteButtonStyle}
            activeOpacity={.5}
            onPress={() => this.addEditNote()}
          >
            <Text style={styles.addNoteTextStyle}> SAVE NOTE </Text>

          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  activityIndicatorContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#4CAF50',
    justifyContent: 'center',
  },
  addNoteButtonStyle: {

    paddingTop: 15,
    paddingBottom: 15,
    marginLeft: 30,
    marginRight: 30,
    backgroundColor: '#4CAF50',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff'
  },
  viewAddNoteContainer: {
    padding: 20,
  },
  addNoteTextStyle: {
    color: '#fff',
    textAlign: 'center',
  },
});