import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import DropDownHeader from './components/DropDownHeader/DropDownHeader';
import ListRPG from './components/ListRPG/ListRPG';
import AddRpg from './components/AddRpg/AddRpg';
// import SupportButton from './components/SupportButton/SupportButton';

function App() {
  return (
    <div>
      {/* <SupportButton SupportId={1} /> */}
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<ListRPG />} />
          <Route path='/getrpg' element={<ListRPG />} />
          <Route path='/addrpg' element={<AddRpg />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
