import {Switch, Route} from "react-router-dom"
import Home from "./pages/Home";
import Error404 from "./pages/Error404"
import ShowAll from "./pages/ShowAll";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Detail from "./pages/Detail";
import Favorites from "./pages/Favorites/Favorites";
import SearchResults from "./pages/SearchResults/SearchResults";

function App() {
  return (
    <>
      <Header/>
      <Switch>
        <Route path = "/" exact component = {Home}/>
        <Route path = "/showall" component= {ShowAll}/>
        <Route path = "/detail/id/:id" component= {Detail} />
        <Route path = "/favorite" component= {Favorites}/>
        <Route path = "/searchresults" component= {SearchResults}/>
        <Route component = {Error404}/>
      </Switch>
      <Footer/>
    </>
  );
}

export default App;
