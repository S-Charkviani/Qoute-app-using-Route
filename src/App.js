import React, { Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Layout from "./components/layout/Layout";
import LoadingSpinner from "./components/UI/LoadingSpinner";
import AllQuotes from "./pages/AllQuotes";


const NewQuote = React.lazy(() => import("./pages/NewQuote"));
const QuoteDetail = React.lazy(() => import("./pages/QuoteDetail"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

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
      {/*Needed for lazy code */}
      <Suspense            
        fallback={
          <div className="centered">
            <LoadingSpinner />
          </div>
        }
      >
        <Switch>
          {" "}
          {/*<Routes> in React-rout 6 instead of Switch and 'Routs' nests every Rout*/}
          <Route path="/" exact>
            <Redirect to="/quotes" />{" "}
            {/* 'Navigate to' instead of 'Redirect to' in Route 6*/}
          </Route>
          <Route path="/quotes" exact>
            {" "}
            {/*instead of exact we need /* after link in Route 6 instead*/}
            <AllQuotes />
          </Route>
          <Route path="/quotes/:quoteId">
            {" "}
            {/*element={<QuoteDetail/>}  in React-route 6 instead*/}
            <QuoteDetail />
          </Route>
          <Route path="/new-quote">
            {" "}
            {/* Route 6 checks the whole matching of the link*/}
            <NewQuote />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Suspense>
    </Layout>
  );
}

export default App;
