import React, { useState} from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import ReactDOM from "react-dom";
import App from "./App";
import UniqueItem from "./uniqueitem";
import Header from "./header";
import Items from "./items";
import Footer from "./MyComponents/Footer";
import Main from "./MyComponents/main";
import About from "./MyComponents/Abouts";

export const Path = React.createContext();
export const Pathh = React.createContext();
function BookList() {
  const [arr, changearr] = useState([]);
  const remove = (novalue) => {
    changearr((arr) => {
      return arr.filter((idvalue) => {
        return idvalue.val !== novalue;
      });
    });
  };

  const [vall, cval] = useState(0);

  return (
    <>
      <Router>
        <Header v={vall}/>
        <Route exact path="/">
          <Main/>
        </Route>
        <Route exact path="/aboutus">
          <About/>
        </Route>
        <Route exact path="/order">
          <Pathh.Provider value={{ vall, cval }}>
            <App wow={{ arr, changearr }}/>
          </Pathh.Provider>
        </Route>
        <Route exact path="/cart">
          <Path.Provider value={{ arr, remove, vall, cval }}>
            <Items/>
          </Path.Provider>
        </Route>
        <Route exact path="/item/:id" children={<UniqueItem val={arr}/>}></Route>
        <Footer/>
      </Router>
    </>
  );
}
export default BookList;
ReactDOM.render(<BookList />, document.getElementById("root"));