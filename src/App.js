import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import ListRPG from './components/ListRPG/ListRPG';
import AddRpg from './components/AddRpg/AddRpg';
import SupportButton from './components/SupportButton/SupportButton';

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
