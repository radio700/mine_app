import {Routes, Route, BrowserRouter, Link} from "react-router-dom"
import { useState, useEffect } from "react";
import Home from "../page/Home";
import Movie from "../page/Movie";

function Router(){

    /*
    * use state and Effect
    */

    useEffect(() =>{
    
    },[])//[]안에 있는 useState는 수가 바뀔 때 마다 재 랜더링됨

    /*
    * User Function
    */
    

    /*
    * HTML {javascript}
    */
    return(
        <div>
        <BrowserRouter>
          <nav style={{
            position:"relative",
            top:"0px",
            width:"100%",
            height:"30px",
            border:"1px solid"
          }}>
              <Link to="/">home | </Link>
              <Link to="/Movie">Movie |</Link>

          </nav>
          <Routes>
              <Route path="/" element={<Home/>}></Route>
              <Route path="/Movie" element={<Movie/>}></Route>
              {/* <Route path ="/movie/:id" element={<Detail/>} ></Route> */}
          </Routes>
        </BrowserRouter>
        </div>
    )
}

export default Router;