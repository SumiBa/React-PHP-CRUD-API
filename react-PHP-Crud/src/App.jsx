import './Style.css'
import { Routes, Route } from 'react-router-dom'
import Header from './Components/Header'
import Home from './Components/Home'
import Userlist from './Components/Userlist'
import Adduser from './Components/Adduser'
import Edituser from './Components/Edituser'
import Footer from './Components/Footer'


function App() {

  return (
    <div className='App'>
      <Header />
      <Routes>
      <Route path='/' element = {<Home />} />
      <Route path='/userlist' element = {<Userlist />} />
      <Route path='/adduser' element = {<Adduser />} />
      <Route path='/edituser/:id' element = {<Edituser />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
