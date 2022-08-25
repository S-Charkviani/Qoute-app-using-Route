
import { Redirect, Route, Switch } from "react-router-dom";
import Layout from "./components/layout/Layout";
// import MainNavigation from "./components/layout/MainNavigation";
import AllQuotes from "./pages/AllQuotes";
import NewQuote from "./pages/NewQuote";
import NotFound from "./pages/NotFound";
import QuoteDetail from "./pages/QuoteDetail";

function App() {
  // const [enteredQuote, setEnteredQuote] = useState({});

  // const addQuoteHandler = (enteredAuthor, enteredText) => {
  //   setEnteredQuote((prevQuote) => {
  //     const updatedQuote = [...prevQuote];
  //     updatedQuote.unshift({
  //       author: enteredAuthor,
  //       text: enteredText,
  //       id: "quote1",
  //     });
  //     return updatedQuote;
  //   });
  // };

  return (
    <Layout>
  <Switch>   {/*<Routes> in React-rout 6 instead of Switch and 'Routs' nests every Rout*/}
      
<Route path="/" exact>
  <Redirect to='/quotes' />   {/* 'Navigate to' instead of 'Redirect to' in Route 6*/ }
</Route>
      <Route path="/quotes" exact>  {/*instead of exact we need /* after link in Route 6 instead*/  }
        <AllQuotes/>                
      </Route>
      <Route path="/quotes/:quoteId">   {/*element={<QuoteDetail/>}  in React-route 6 instead*/  }
        <QuoteDetail />
      </Route>
      <Route path="/new-quote">     {/* Route 6 checks the whole matching of the link*/}
        <NewQuote />
      </Route>
      <Route path='*'><NotFound /></Route>
    </Switch>
    </Layout>
  );
}

export default App;
