import { Route, Switch, Redirect } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Home from "./Page/Home";
import ShowTotal from "./Page/ShowTotal";
import AllMovieSeat from "./Component/BookTicketForm/AllMovieSeat";
import Header from "./Component/Layout/Header";
function App() {
  return (
    <BrowserRouter>
      <Header/>
        <Route path={"/"} exact>
          <Home />
        </Route>
        <Route path={"/allmovieseat"}>
          <AllMovieSeat/>
        </Route>
        <Route path={"/showtotal"}>
          <ShowTotal />
        </Route>
    </BrowserRouter>
  );
}

export default App;
