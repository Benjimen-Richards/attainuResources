import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom'
import Homepage from './Components/Homepage';
import Adduser from './Components/Adduser';
import Validatecoupon from './Components/Validatecoupon';
import Adminpagedashboard from './Components/Adminpage';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path='/' exact component={Homepage}/>
        <Route path='/dashboard'  component={Adminpagedashboard}/>
        <Route path='/adminadd' exact component={Adduser}/>
        {/* <Route path='/validate' exact component={Validatecoupon}/> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
