import {Routes, Route, BrowserRouter, Link} from "react-router-dom"
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import Example from "./Example";

function App(){
    return (
    <BrowserRouter>
        <nav>
            <Link to="/">home</Link>
            <Link to="/movie">movie</Link>
        </nav>
        <Routes>
            <Route path="/" element={<Example/>}></Route>
            <Route path="/movie" element={<Home/>}></Route>
            <Route path ="/movie/:id" element={<Detail/>} ></Route>
        </Routes>
    </BrowserRouter>
    );
}

export default App;