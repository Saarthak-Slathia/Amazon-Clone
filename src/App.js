import React from "react";
import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Subheader from "./components/Subheader";
import Card from "./components/Card";
import Contentgrid from "./components/Contentgrid";
import Database from "./components/Database";
import SignIn from "./components/SignIn";
import Footer from "./components/Footer";

const acard = (val) => {
  return <Card title={val.title} img={val.imageUrl} author={val.imageAuthor} />;
};

const gcontent = (val2) => {
  return (
    <Contentgrid
      topic={val2.gridTitle}
      img={val2.imageUrl}
      author={val2.imageAuthor}
      price={val2.price}
    />
  );
};

const App = () => {
  return (
    <>
      <Navbar />
      <div className="main__content">
        <Subheader />
        <Hero />
        <div className="cards">{Database.map(acard)}</div>
        <div className="grid_contents">
          <div className="grids">{Database.map(gcontent)}</div>
          <h3 className="price">{Database[0].price}</h3>
        </div>
        <div className="grid_contents">
          <div className="grids">{Database.map(gcontent)}</div>
          <h3 className="price">{Database[0].price}</h3>
        </div>
        <div className="grid_contents">
          <div className="grids">{Database.map(gcontent)}</div>
          <h3 className="price">{Database[0].price}</h3>
        </div>
        <div className="cards">{Database.map(acard)}</div>

        <SignIn />
        <Footer />
      </div>
    </>
  );
};

export default App;
