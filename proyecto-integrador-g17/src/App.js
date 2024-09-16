import {Switch, Route} from "react-router-dom"
import Home from "./pages/Home";
import Error404 from "./pages/Error404"
import ShowAll from "./pages/ShowAll";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Detail from "./pages/Detail";
import Favorite from "./pages/Favorites";
import Results from "./pages/Results";

function App() {
  return (
    <>
      <Header/>
      <Switch>
        <Route path = "/" exact component = {Home}/>
        <Route path = "/showall" component= {ShowAll}/>
        <Route path = "/detail" component= {Detail}/>
        <Route path = "/favorite" component= {Favorite}/>
        <Route path = "/results" component= {Results}/>
        <Route component = {Error404}/>
      </Switch>
      <Footer/>
    </>
  );
}

export default App;
