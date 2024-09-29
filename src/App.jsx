
import './App.css'
import { Footer } from './components/footer'
import { Homepage } from './components/homepage'
import {  My_skills } from './components/my_skills'
import Navbar from './components/Navbar'
import { Projects } from './components/projects'

function App() {
  

  return (
   < >
   <div className=''>
   <Navbar/>  
   <Homepage/>
   <My_skills/>
   <Projects/>
   <Footer />
   </div>
   
   </>
  )
}

export default App
