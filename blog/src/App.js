import React from 'react';
import './App.css';
import AddBlog from './components/addBlog';
import Blog from './components/blog';
import Footer from './components/footer';

function App() {

  return (
    <div className="App">
      <Blog />
      <AddBlog />
      <Footer/>
    </div>
  );
}

export default App;
