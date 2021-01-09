
import './App.css';
import Homepage from './pages/homepage/homepage';
import {Link, Route,Switch} from 'react-router-dom';

const Hats = (props) =>{
  return(
    <div>
      <Link to="/">TO homepage</Link>
      <button onClick={() => {
         props.history.push('/')
      }}>To home </button>
      <h1>Hats are here</h1>
    </div>
  )
}


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop/hats" component={Hats} />
      </Switch>
     
       
    </div>
  );
}

export default App;
