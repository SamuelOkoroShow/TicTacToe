/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  StatusBar,
  ListView,
  View
} from 'react-native';

import oes from  "../images/black.png"
import xes from  "../images/red.png"
var grid = [
[0,0,0],
[0,0,0],
[0,0,0]]
var columnCount = 0;
var rowCount = 0;

var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
export default class game30 extends Component {
  constructor(props){
    super(props)

    this.state = {
      dataSource: ds.cloneWithRows(grid),
      dataSourceRow: ds.cloneWithRows(grid[0]),

    }
  }

  checkForWin(){

  }

  winAlgos(){

  }

  columns(row, sectionIDR, rowIDR, highlightRowR){

  
    return(<ListView
      dataSource ={ds.cloneWithRows(row)}
       horizontal = {true}
       contentContainerStyle = {{flex:1, alignItems:'center', justifyContent:'center'}}
       scrollEnabled ={false}
       renderRow = {(rowData, sectionID, rowID, highlightRow) => this.rows(rowData, rowIDR, rowID)}
       />

      )
  }

  ai(){
        var ranX = this.random()
        var ranY = this.random()
    for(var i = 0; grid[ranX][ranY] = 0; i++){
        ranX = this.random()
        ranY = this.random()


    }
    if(grid[ranX][ranY] == 0){
        grid[ranX][ranY] = 2
        this.setState({
              dataSource: ds.cloneWithRows(grid),
            })}

  }

  random(){
    return Math.floor(Math.random() * 3 );
  }

  rows(x,y,z){


    if(x == 0){
        return(
            <TouchableOpacity onPress={() => this.mark(z,y)} style={{width:100, height:100, backgroundColor:'#fff', margin:10, borderColor:'#e7e7e7', borderBottomWidth:2}}></TouchableOpacity>
        )}else if(x == 1){
           return(
            <View style={{width:100, height:100, backgroundColor:'#fff', margin:10, justifyContent:'center', alignItems:'center', borderColor:'#e7e7e7', borderBottomWidth:2}}>
            <Image source = {xes} style={{height:80, width:80}} resizeMode = "contain" />
            </View>
        )
        }else if(x == 2){
           return(
            <View style={{width:100, height:100, backgroundColor:'#fff', margin:10, justifyContent:'center', alignItems:'center', borderColor:'#e7e7e7', borderBottomWidth:2}}>
            <Image source = {oes} style={{height:80, width:80}} resizeMode = "contain" />
            </View>
        )
        }  }

      mark(x,y){

        grid[y][x] = 1
        this.setState({
          dataSource: ds.cloneWithRows(grid),
        })
        this.checkForWin()
        this.ai()
      }

  render() {
    return (
      <View style={styles.container}>
      <StatusBar
     backgroundColor="blue"
     barStyle="light-content"
   />
      <View style={styles.nav}>
      <Text 
      style={{color:'#fff', fontSize:20, fontWeight:'300'}}>
      Tic Tac Toe</Text>
      </View>
       <ListView 
       dataSource ={this.state.dataSource}
       style = {{flex:1}}

       scrollEnabled ={false}
       renderRow = {(rowData, sectionID, rowID, highlightRow) => this.columns(rowData, sectionID, rowID, highlightRow)}
       />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#e7e7e7',
  },
  nav:{
    height:60,
    backgroundColor:'#333',
    justifyContent:'center',
    alignItems:'center'

  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

