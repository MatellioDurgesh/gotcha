import React, { Component } from 'react';
import { View, Text,Picker,StyleSheet } from 'react-native';

export default class PickerView extends Component {
  constructor(props) {
    super(props);
    this.state = {
       pickValue:'#383838'
    };
    this.setPickerValue('#383838')
  }
  setPickerValue = (itemValue) => {
    this.state.pickValue=itemValue
    this.props.getPickerValue(itemValue);
}
  render() {
    console.log(this.props)
    return (
      <View style={styles.container}>
            <Picker
            itemStyle={styles.pickerItemStyle}
            mode="dropdown"
                 style={styles.picker}
                selectedValue={this.state.pickValue}
                onValueChange={(itemValue, itemIndex) => this.setPickerValue(itemValue)}>
                <Picker.Item 
                label="Dark Grey" 
                value="#383838" />
                <Picker.Item 
                label="Carrot" 
                value="#e67e22" />
                <Picker.Item 
                label="Midnight Blue" 
                value="#2c3e50" />
            </Picker>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    container: {
      padding: 20,
    },
    picker: {
        borderColor:'#4CAF50',
        borderWidth:2,
        borderStyle:'dotted'
      },
      pickerItemStyle: {
        fontSize: 25, 
        textAlign: 'center', 
        fontWeight: 'bold',
        backgroundColor:'#4CAF50',
      },
  });