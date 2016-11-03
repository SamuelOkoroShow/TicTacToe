import React, { Component } from 'react';
import {
  Navigator,
  View
} from 'react-native';


import Splash from './splash';
import Board from './board';

const routes = {
  splash: Splash,
  board: Board
};

export default class Index extends Component {

  constructor(){
    super();

  }

  renderScene({ id }, navigator){
    const Scene = routes[id]
    return <Scene {...this.props} navigator={navigator} gameManager={ this.gameManager }/>
  }


  render(){
    return (
        <View style={{flex:1}}>
            <Navigator
              style={{flex: 1}}
              ref={'NAV'}
              initialRoute={{id: 'board', name: 'board'}}
              renderScene={this.renderScene.bind(this)}
            />
        </View>
    )
  }
}
