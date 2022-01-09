import React from 'react';
import './App.css';
import AddBlog from './components/addBlog';
import BlogMore from './components/BlogMore';
import NewBlog from './components/NewBlog
import AddCategory from './components/addCategory';
import ListBlog from './components/listBlog';
import LinkBlog from './components/link';
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
          <Route path="/BlogMore" exact >
            <BlogMore />
          </Route>
          <Route path="/NewBlog" exact >
            <NewBlog />
          </Route>
          <Route path="/ListBlog" exact >
            <ListBlog />
          </Route>
          <Route path="/category" exact >
            <AddCategory />
          </Route>
          <Route path="/uk" exact >
            <LinkBlog />
          </Route>
          <Route path="/Blog/:url" children={<ViewBlog />} exact>
          </Route>
        </Switch>
      </div>
      </Router>
    <Footer/>
    </div>
  );
}

export default App;
