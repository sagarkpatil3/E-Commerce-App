import { Routes, Route } from 'react-router-dom';
import Directory from './components/directory/directory.component';
import Navbar from './routes/navbar/navbar.component';
import Home from './routes/home/home.component';
import Authentication from './routes/authentication/authentication.component';

const App = () => {


  return (
    <Routes>
      <Route path='/' element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path='auth' element={<Authentication />} />
      </Route>
    </Routes>
  );
}

export default App;
