import React from 'react'
import { FlatList, TouchableHighlight } from 'react-native'
import News from './News'

class ListNews extends React.Component {

  _viewDetail = (item) => {
    this.props.nav.navigate('Detail', { item: item })
  }

  render() {

    const { data } = this.props

    return (
      <FlatList
        data={data}
        renderItem={({ item }) =>
          <TouchableHighlight
            onPress={() => this._viewDetail(item)}
            underlayColor={'#FFF'}>
            <News news={item} />
          </TouchableHighlight>}
        keyExtractor={item => item.url}
      />
    )
  }
}

export default ListNews
