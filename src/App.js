// import logo from './logo.svg';
import './App.css';
import Rooms from './components/rooms';
import { BrowserRouter as Router, Routes , Route} from 'react-router-dom';
// import ForgetPassword from './components/forgotPassword'
import Book from './components/Booking';

function App() {
  return (
    <div className="App">
    {/* <Rooms/> */}
    <Router>
      <Routes>
        <Route exact path='/Book' element= {<Book/>}/>
      </Routes>
    
    </Router>
    
    {/* <Route exact path='/ForgotPassword' component={ForgetPassword}></Route> */}
    </div>
  );
}

export default App;
