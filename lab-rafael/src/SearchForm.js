import React from 'react';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subreddit: '',
      limit: 100
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let change = e.target.value;
    this.setState({[e.target.name]: change});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.submit(this.state);
  }

  render() {
    return <form className={this.props.error} onSubmit={this.handleSubmit}>
      <input type="text"
        name="subreddit"
        onChange={this.handleChange}
        value={this.state.subreddit}
        placeholder="enter subreddit name" />
      <input type="number" name="limit" value={this.state.limit} min="0" max="100"
        onChange={this.handleChange} />
      <input type="submit" value="GO!" />
    </form>
  }
}

module.exports = SearchForm;
