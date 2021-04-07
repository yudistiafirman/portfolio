
import { BrowserRouter as Router,Route, Switch } from "react-router-dom";

import Navbar from "./Component/Navbar/Navbar";
import Init from './Pages/Init/Init'
import Projects from './Pages/Projects/Project'
import About from './Pages/About/About'




function App() {

  
 
    return (
      <div>
        <Router>
            <Navbar/>
          <Switch>
             
              <Route path="/" exact   component={Init}/>
              <Route path='/projects' component={Projects}/>
              <Route path="/about" component={About}/> 


          </Switch>

        </Router>
        {/* <Loading/> */}
      
    </div>
  )
   
}

export default App;
