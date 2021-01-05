import React from 'react';
import './App.css';
import AddBlog from './components/addBlog';
import BlogHome from './components/blogHome';
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
        <div className="main_menu">
        <Switch>
          <Route path="/" exact>
            <BlogHome />
          </Route>
          <Route path="/AddBlog" exact >
            <AddBlog />
          </Route>
          <Route path="/Blog/:url" children={<ViewBlog />} >
          </Route>
        </Switch>
      </div>
      </Router>
    <Footer/>
    </div>
  );
}

export default App;
