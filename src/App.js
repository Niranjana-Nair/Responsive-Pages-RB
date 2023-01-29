import './App.css';
import { Route,Routes } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import Homepage from './Homepage/Homepage';
import HeroSection from './HeroSection/HeroSection';
import Home from './Home/Home';
import UserLogin from './UserLogin/UserLogin';
import UpdateAccount from './UpdateAccount/UpdateAccount';
import UserRegister from './UserRegister/UserRegister';
import PoolList from './PoolList/PoolList';
import ConfirmPoolDetails from './ConfirmPoolDetails/ConfirmPoolDetails';
import TripsHostedList from './TripsHostedList/TripsHostedList';
import CheckRideDetails from './CheckRideDetails/CheckRideDetails';

export default function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      {/* <Footer/> */}
      {/* <Header/> */}
      <Routes>
        {/* <Route path='/home' element={<Homepage></Homepage>}></Route> */}
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/user-login' element={<UserLogin></UserLogin>}></Route>
        <Route path='/update-account' element={<UpdateAccount></UpdateAccount>}></Route>
        <Route path='/user-register' element={<UserRegister></UserRegister>}></Route>
        <Route path='/pool-list' element={<PoolList></PoolList>}></Route>
        <Route path='/verify-pool-details' element={<ConfirmPoolDetails></ConfirmPoolDetails>}></Route>
        <Route path='/hosted-trips' element={<TripsHostedList></TripsHostedList>}></Route>
        <Route path='/check-ride-details' element={<CheckRideDetails></CheckRideDetails>}></Route>
        
      </Routes>
    </div>
  );
}

