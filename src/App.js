
import { Redirect, Route, Switch } from "react-router-dom";
import Layout from "./components/layout/Layout";
import MainNavigation from "./components/layout/MainNavigation";
import AllQuotes from "./pages/AllQuotes";
import NewQuote from "./pages/NewQuote";
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
    <Switch>
      
<Route path="/" exact>
  <Redirect to='/quotes' />
</Route>
      <Route path="/quotes" exact>
       
        <AllQuotes/>
      </Route>
      <Route path="/quotes/:quoteId">
        <QuoteDetail />
      </Route>
      <Route path="/new-quote">
        <NewQuote />
      </Route>
      
    </Switch>
    </Layout>
  );
}

export default App;
