import { Route, Routes } from 'react-router-dom'

import Home from '../../pages/Home/Home';
import Create from '../../pages/Create/Create';
import Edit from '../../pages/Edit/Edit';
import Show from '../../pages/Show/Show';
import Saved from '../../pages/Saved/Saved';

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/edit/:path" element={<Edit />} />
        <Route path="/show/:id" element={<Show />} />
        <Route path="/saved" element={<Saved />} />
      </Routes>
    </main>
  );
};

export default Main;