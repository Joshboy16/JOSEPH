import Navbar from "./Navbar"
import About from "./pages/About";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";


function App() {

    console.log(window.location)
    let Component
    switch (window.location.pathname) {
      case "/":
        Component = Home
        break;
      
      case "/pricing":
        Component = Pricing
        break;
    
      case "/about":
        Component = About
        break;
  
    }

  return (
    
     <> 
     
     <Navbar/> 

    <div className="container"> <Component/> </div>
     
     
     </>
    
  )
  


    
   



}

export default App