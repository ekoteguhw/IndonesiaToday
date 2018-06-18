import React from 'react'
import axios from 'axios'
import ListNews from '../components/ListNews'

class HomeScreen extends React.Component {

  static navigationOptions = {
    title: 'Indonesia Today'
  }

  constructor() {
    super()
    this.state = {
      listNews: []
    }
  }

  componentDidMount() {
    axios.get('https://newsapi.org/v2/top-headlines?country=id&apiKey=7d848d73b1de439696a0ba1014e08ed3').then(res => this.setState({
      listNews: res.data.articles
    }))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <ListNews
        data={this.state.listNews}
        nav={this.props.navigation} />
    )
  }
}

export default HomeScreen
