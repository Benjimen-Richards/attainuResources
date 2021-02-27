import './App.css';
import  {BrowserRouter, Route } from 'react-router-dom'
import Homepage from './Components/IndexPage/Homepage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path='/' component={Homepage}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
