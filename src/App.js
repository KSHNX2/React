import logo from './logo.svg';
import MyDiv1 from './01/MyDiv1';
import MyDiv2 from './01/MyDiv2';
import MyClock from './01/Myclock';
import './App.css'
const App=() =>{
    console.log('App.js');
  return (
    <div className="App-header">
      <MyDiv1/>
      <MyDiv2/>
      <MyClock/>
    </div>
  );
}

export default App;
