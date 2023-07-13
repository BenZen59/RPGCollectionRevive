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
        <div className='flex'>
          <SupportButton SupportId={1} />
          <SupportButton SupportId={2} />
          <SupportButton SupportId={3} />
          <SupportButton SupportId={4} />
          <SupportButton SupportId={5} />
          <SupportButton SupportId={6} />
          <SupportButton SupportId={7} />
          <SupportButton SupportId={8} />
          <SupportButton SupportId={9} />
          <SupportButton SupportId={10} />
          <SupportButton SupportId={11} />
          <SupportButton SupportId={12} />
          <SupportButton SupportId={13} />
          <SupportButton SupportId={14} />
          <SupportButton SupportId={15} />
          <SupportButton SupportId={16} />
          <SupportButton SupportId={17} />
          <SupportButton SupportId={18} />
        </div>
        <div className='flex mb-8'>
          <GenreButton GenreId={1} />
          <GenreButton GenreId={2} />
          <GenreButton GenreId={3} />
          <GenreButton GenreId={4} />
          <GenreButton GenreId={5} />
          <GenreButton GenreId={6} />
          <GenreButton GenreId={7} />
          <GenreButton GenreId={8} />
          <GenreButton GenreId={9} />
          <GenreButton GenreId={10} />
          <GenreButton GenreId={11} />
          <GenreButton GenreId={12} />
          <GenreButton GenreId={13} />
          <GenreButton GenreId={14} />
        </div>
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
