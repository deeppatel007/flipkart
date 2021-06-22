// import logo from './logo.svg';
// import './App.css';
import Header from './header/Header';
import Home from './Home/Home';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Cart from './cart/Cart';
import { Templetsprovider } from './templets/Templetsprovider';
function App() {
  return (

    <Templetsprovider>
    <BrowserRouter>
    <Header></Header>
    <Switch>
    <Route exact path='/' component={Home}/>
    <Route exact path='/Cart' component={Cart}/>
    </Switch>
    </BrowserRouter>
    </Templetsprovider>
    
  );
}

export default App;
