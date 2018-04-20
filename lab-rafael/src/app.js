import React from 'react';
import ReactDOM from 'react-dom';
import SearchForm from './SearchForm';
import SearchResults from './SearchResults';
import './style/main.scss';
import fetch from 'node-fetch';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faArrowCircleUp from '@fortawesome/fontawesome-free-solid/faArrowCircleUp';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Subreddit Topics Search',
      results: [],
      error: '',
      errorMessage: 'No results found'
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(query) {
    fetch('https://www.reddit.com/r/' + query.subreddit + '.json?limit=' + query.limit)
    .then(res => {
      this.state.error = '';
      return res.json();
    }).then(json => {
      this.setState({
        results: json.data.children.map(item => {
          return <li key={item.data.id}>
            <a href={item.data.url}>
              <span className='ups'><FontAwesomeIcon icon={faArrowCircleUp} /><span className='text'>{item.data.ups}</span></span>
              <h2>{item.data.title}</h2>
            </a>
          </li>
        })
      })
    })
    .catch(err => {
      this.setState({error: 'error', results: []});
    })
  }

  render() {
    return <div className="wrapper">
      <h1>{this.state.title}</h1>
      <SearchForm error={this.state.error} submit={this.handleSubmit}/>
      <div className='errorMessage'>{this.state.errorMessage}</div>
      <SearchResults results={this.state.results}/>
    </div>
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
