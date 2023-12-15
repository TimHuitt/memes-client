import { Route, Routes } from 'react-router-dom'
import Module from '../../pages/Module'

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Module />} />
      </Routes>
    </main>
  );
};

export default Main;