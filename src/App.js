import React from 'react';
import './App.css';

import NavBar from './components/navbar/navbar';
import SlideShow from './components/slideshow/slideshow';

//import Test from './test';

class App extends React.Component {
  render() {  
  return (
    <div className="App">
      <NavBar onLogin={this.onLogin}/>
      <div>
      <div className='center w-70 ma3'>
        <SlideShow />
      </div>
      </div>
    </div>
  );
  }
}

export default App;
