import { BrowserRouter, Switch, Route } from "react-router-dom";
import { makePageRegistration } from "./main/pages/plant-registration/plant-resgistration-factory";
import { Footer, Header } from "./components";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import ErrorPage from "./pages/ErrorPage";
import ProductsPage from "./pages/ProductsPage";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/products" component={ProductsPage} />
          <Route path="/product/:id" component={ProductPage} />
          <Route path="/about-us" component={AboutUs} />
          <Route path="/plant-registration" component={makePageRegistration} />
          <Route path="/*" component={ErrorPage} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

