import * as React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import Logo from './Logo';
import MyNotes from './MyNotesRecyclerView';
import SharedNotes from './SharedNotes'

const FirstRoute = () => (
  <View>
    <MyNotes />
  </View>
);

const SecondRoute = () => (
  <View>
    <SharedNotes />
  </View>
);

export default class TabViewExample extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'myNotes', title: 'My Notes' },
      { key: 'sharedNotes', title: 'Shared Notes' },
    ],
  };

  render() {
    return (
      <TabView style={{
        paddingTop: 200,
        marginLeft: 50,
        marginRight: 50,
        paddingBottom: 100
      }}
        navigationState={this.state}
        renderScene={SceneMap({
          myNotes: FirstRoute,
          sharedNotes: SecondRoute,
        })}
        onIndexChange={index => this.setState({ index })}
        initialLayout={{ height: Dimensions.get('window').height }}
      />
    );
  }
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
});