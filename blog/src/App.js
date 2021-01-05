import React from 'react';
import './App.css';
import AddBlog from './components/addBlog';
import Blog from './components/blog';
import Footer from './components/footer';
import ViewBlog from './components/viewBlog';
import { BrowserRouter as Router} from 'react-router-dom';
import { Switch , Route} from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Router>
        <Blog />
        <Switch>
          <Route path="/" exact>
            <AddBlog />
          </Route>
          <Route path="/AddBlog" exact>
            <AddBlog />
          </Route>
          <Route path="/Dashboard" exact>
          </Route>
          <Route path="/Blog/:url" children={<ViewBlog />} exact>
           
          </Route>
        </Switch>
      </Router>
    <Footer/>
    </div>
  );
}

export default App;
