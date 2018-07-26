import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import { Actions } from 'react-native-router-flux';
import NavigationBar from 'react-native-navbar';
import { SwipeListView } from 'react-native-swipe-list-view';
import { GET_ALL_NOTES } from '../config/global'
import { BASE_URL } from '../config/global'

const rightButtonConfig = {
  title: 'Next',
  handler: () => alert('hello!'),
};
const titleConfig = {
  title: 'Hello, world',
};

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.getNotesData()
    global.SampleVar = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.';
    this.state = {
      listViewData: [{ name: 'ram', color: '#2c3e50', description: global.SampleVar }, { name: 'Shyam', color: '#e67e22', description: global.SampleVar }
      ],
      noteTitle: '',
      description: '',
      isLoading: true
    };
  }
  componentWillReceiveProps(nextProps) {
    console.log('Prop getted:'+this.props.nextProps)
    this.getNotesData()
  }
  
  getNotesData = () => {
    console.log('inside function')
    return fetch(GET_ALL_NOTES)
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson)
        this.setState({
          isLoading: false,
          dataSource: responseJson,
        }, function () {
          console.log(this.state.dataSource)

        });

      })
      .catch((error) => {
        console.error(error);
      });
  }
  buttonClickCheckFunction = () => {
    noteTitle = null,
      description = null
    Actions.addNote({ noteTitle, description })

  }
  editNote = (e) => {
    noteTitle = e.title,
      description = e.details,
      id = e.id,
      color = e.color
    Actions.addNote({ noteTitle, description, id, color })

  }
  deleteNoteFromArray(e) {
    var array = [...this.state.dataSource]; // make a separate copy of the array
    var index = array.indexOf(e)
    array.splice(index, 1);
    this.setState({ dataSource: array });

  }
  deleteNote(e) {
    this.setState({
      isLoading: true,
    })
    console.log(`${BASE_URL}${e.id}/?format=json`)
    let data = {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    }
    return fetch(`${BASE_URL}${e.id}/?format=json`, data)
      .then((responseJson) => {
        console.log(responseJson)
        this.setState({
          isLoading: false,
          //dataSource: responseJson,
        }, function () {
          this.deleteNoteFromArray(e)

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
      <View style={styles.container}>
        <View style={styles.viewAddNoteContainer}>
          <TouchableOpacity
            style={styles.addNoteButtonStyle}
            activeOpacity={.5}
            onPress={this.buttonClickCheckFunction}
          >
            <Text style={styles.addNoteTextStyle}> ADD NOTE </Text>

          </TouchableOpacity>
        </View>
        <View style={styles.swipeList}>

          <SwipeListView

            useFlatList
            data={this.state.dataSource}
            renderItem={(data, rowMap) => (

              <View style={[styles.rowFront, { backgroundColor: data.item.color }]}>
                <TouchableOpacity
                  onPress={() => this.editNote(data.item)}
                >
                  <Text style={styles.rowFrontTitle}>Title: {data.item.title}</Text>
                  <Text style={styles.rowFrontDescription}>Description: {data.item.details} </Text>
                </TouchableOpacity>
              </View>
            )}
            renderHiddenItem={(data, rowMap) => (
              <View style={styles.rowBack}>
                <Text
                  onPress={() => this.deleteNote(data.item)}
                >Delete</Text>
              </View>
            )}
            rightOpenValue={-75}
          />
        </View>

      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    top: 40,
    justifyContent: 'flex-start',
  },
  activityIndicatorContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#4CAF50',
    justifyContent: 'center',
  },
  activityInd: {
    color: 'white',
    width: 50,
    height: 50
  },
  rowFront: {
    //alignItems: 'center',
    backgroundColor: '#CCC',
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    justifyContent: 'center',
  },
  rowBack: {
    alignItems: 'center',
    backgroundColor: '#e74c3c',
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'flex-end',
    width: 75

  },
  navContainer: {
    flex: 1,
  },
  rowFrontTitle: {
    padding: 10,
    fontWeight: 'bold',
    color: 'white',
    textAlignVertical: 'top'
  },
  rowFrontDescription: {
    padding: 10,
    color: 'white',
    textAlignVertical: 'top',
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
  swipeList: {
    paddingBottom: 230,
  }
});