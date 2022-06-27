import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';
import Navbar from './components/Navbar';
import First from './components/First';
import Second from './components/Second';
import Third from './components/Third';
import Footer from './components/Footer';
import SignUp from './components/SignUp';



const App = ()=>{
  return(
    <>
    <div className='bg'> 
   
      <Navbar/>
      <BrowserRouter>
             <Route exact path='/' component={First}/>
             <Route exact path='/contact/' component={Third}/>
             <div className='singnUp-center'>
                 <Route exact path='/signup/' component={SignUp}/>
             </div>
       </BrowserRouter>
      <First/>
     </div>
     <Second/>
     <div className='bg'>
         <Third/>
         <hr/> 
         <Footer/>   
     </div>
    

    </>
  )
}
export default App;