import { useEffect, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import Navbar from './components/Navbar.jsx'
import News from './components/News.jsx'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import Login from './components/Login.jsx'

const App = () => {

  const apiKey = 'f68e45b55dd748a69cec915d816a672f';
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <>
    <BrowserRouter>
      <Navbar onSearch={setSearchTerm}/>
      <Routes>
        <Route exact path='/' element={<News key="general" apiKey={apiKey} pageSize={8} country='us' category='general' searchTerm={searchTerm}/>}/>
        <Route exact path='/business' element={<News key="business" apiKey={apiKey} pageSize={8} country='us' category='business' searchTerm={searchTerm}/>}/>
        <Route exact path='/entertainment' element={<News key="entertainment" apiKey={apiKey} pageSize={8} country='us' category='entertainment' searchTerm={searchTerm}/>}/>
        <Route exact path='/general' element={<News key="general" apiKey={apiKey} pageSize={8} country='us' category='general' searchTerm={searchTerm}/>}/>
        <Route exact path='/health' element={<News key="health" apiKey={apiKey} pageSize={8} country='us' category='health' searchTerm={searchTerm}/>}/>
        <Route exact path='/science' element={<News key="science" apiKey={apiKey} pageSize={8} country='us' category='science' searchTerm={searchTerm}/>}/>
        <Route exact path='/sports' element={<News key="sports" apiKey={apiKey} pageSize={8} country='us' category='sports' searchTerm={searchTerm}/>}/>
        <Route exact path='/technology' element={<News key="technology" apiKey={apiKey} pageSize={8} country='us' category='technology' searchTerm={searchTerm}/>}/>
      </Routes>
      {/* <Login onLogin={(credentials) => console.log(credentials)} /> */}
    </BrowserRouter>
    </>
  )
}

export default App
