import React from 'react';

class SearchResults extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>
      <ul>{this.props.results}</ul>
    </div>
  }
}

module.exports = SearchResults;
