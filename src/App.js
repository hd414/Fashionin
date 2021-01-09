
import './App.css';
import Homepage from './pages/homepage/homepage';
import {Link, Route,Switch} from 'react-router-dom';
import Shop from './pages/shop/shop';
import Header from './components/header/header';

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop" component={Shop} />
      </Switch>
     
       
    </div>
  );
}

export default App;
