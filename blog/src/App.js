import React from 'react';
import './App.css';
import AddBlog from './components/addBlog';
import BlogMore from './components/BlogMore';
import NewBlog from './components/NewBlog'
import AddCategory from './components/addCategory';
import ListBlog from './components/listBlog';
import LinkBlog from './components/link';
import BlogHome from './components/blogHome';
import Blog from './components/blog';
import Footer from './components/footer';
import ViewBlog from './components/viewBlog';
import { Routes, BrowserRouter as Router, Route} from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Router>
        <Blog />
        <div className="main_menu">
        <Routes>
        <Route path="/" element={ <BlogHome />} exact />
        <Route path="/AddBlog" element={ <AddBlog />} exact />
        <Route path="/BlogMore" element={ <BlogMore />} exact />
        <Route path="/NewBlog" element={ <NewBlog />} exact />
        <Route path="/ListBlog" element={ <ListBlog />} exact />
        <Route path="/category" element={ <AddCategory />} exact />
        <Route path="/ListBlog" element={ <ListBlog />} exact />
        <Route path="/Blog/:url" element={ <ViewBlog />} exact />
          {/* <Route path="/" exact>
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
          </Route> */}
        </Routes>
      </div>
      </Router>
    <Footer/>
    </div>
  );
}

export default App;
