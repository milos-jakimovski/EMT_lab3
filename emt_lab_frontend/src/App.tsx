import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Accommodations from './pages/Accommodations';
import Hosts from './pages/Hosts';
import Countries from './pages/Countries';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="accommodations" element={<Accommodations />} />
          <Route path="hosts" element={<Hosts />} />
          <Route path="countries" element={<Countries />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;