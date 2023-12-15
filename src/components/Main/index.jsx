import { Route, Routes } from 'react-router-dom'
import Home from '../../pages/Home/Home'

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </main>
  );
};

export default Main;