import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Create from './components/Create';
import Register from './components/Register';
import Topics from './components/Topics';
import Login from './components/Login';
import Update from './components/Update';
import Logout from './components/Logout';
import { AuthProvider } from './contexts/AuthContext';


function App() {
  return (
    <>
      <AuthProvider>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create' element={<Create />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/topics' element={<Topics />} />
          <Route path='/update' element={<Update />} />
          <Route path='/logout' element={<Logout />} />


        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
