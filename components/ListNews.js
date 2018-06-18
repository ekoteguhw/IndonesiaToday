import React from 'react'
import { FlatList, TouchableHighlight } from 'react-native'
import News from './News'

class ListNews extends React.Component {

  _viewDetail = (url) => {
    this.props.nav.navigate('Detail', { url: url })
  }

  render() {

    const { data } = this.props

    return (
      <FlatList
        data={data}
        renderItem={({ item }) =>
          <TouchableHighlight
            onPress={() => this._viewDetail(item.url)}
            underlayColor={'#FFF'}>
            <News news={item} />
          </TouchableHighlight>}
        keyExtractor={item => item.url}
      />
    )
  }
}

export default ListNews
