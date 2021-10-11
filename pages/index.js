import { Component } from 'react';

class Home extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <a href="/gallery">
            <div className="card rainbow btn col-12 col-md-4">
              View Gallery
            </div>
          </a>
          <a href="/game">
            <div className="card rainbow btn col-12 col-md-4">
              Play Game
            </div>
          </a>
        </div>
      </div>
    );
  }
}

export default Home;
