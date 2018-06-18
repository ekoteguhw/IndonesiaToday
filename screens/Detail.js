import React from 'react'
import { View, WebView, StyleSheet } from 'react-native'

class DetailScreen extends React.Component {

  static navigationOptions = {
    title: 'Detail'
  }

  render() {

    const url = this.props.navigation.getParam('url')

    return (
      <View style={styles.container}>
        <WebView
          source={{ uri: url }}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default DetailScreen
