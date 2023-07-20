import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import ListRPG from './components/ListRPG/ListRPG';
import AddRpg from './components/AddRpg/AddRpg';
import UpdateRpg from './components/UpdateRpg/UpdateRpg';
import DetailsRPG from './components/DetailsRpg/DetailsRpg';
import SupportButton from './components/Button/SupportButton';
import GenreButton from './components/Button/GenreButton';
import Test from './components/Test/Test';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path='/' element={<ListRPG />} />
          <Route path='/getrpg' element={<ListRPG />} />
          <Route path='/addrpg' element={<AddRpg />} />
          <Route path='/updaterpg/:id' element={<UpdateRpg />} />
          <Route path='/detailsrpg/:id' element={<DetailsRPG />} />
          <Route path='/test' element={<Test />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
