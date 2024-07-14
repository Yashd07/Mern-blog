import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';
import Projects from './pages/Projects';
import SignUp from './pages/SignUp';
import Header from './components/Header';
import Footer from './components/Footer';
import Search from './pages/Search';
import PrivateRoute from './components/PrivateRoute.jsx'
import CreatePost from './pages/CreatePost.jsx';

const App = () => {
  return (
    <BrowserRouter>
    {/* <ScrollToTop /> */}
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/sign-in' element={<SignIn />} />
      <Route path='/sign-up' element={<SignUp />} />
      <Route path='/search' element={<Search />} />
      <Route element={<PrivateRoute />}>
          <Route path='/dashboard' element={<Dashboard />} />
        </Route>
      <Route path='/projects' element={<Projects />} />

      <Route path='/create-post' element={<CreatePost />} />
      
    </Routes>
    <Footer />
  </BrowserRouter>
  )
}

export default App
