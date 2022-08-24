import React, { Fragment } from "react";
import { Link, Route, useParams, useRouteMatch } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const QuoteDetail = () => {
  const Dummy_Quotes = [
    { id: "q1", author: "Natia", text: "Dont throw pearls to pigs" },
    { id: "q2", author: "Nini", text: "Work hard, party harder" },
    { id: "q3", author: "Levan", text: "I'm a lone wolf" },
  ];

  const params = useParams();
  const match=useRouteMatch();

  const quote = Dummy_Quotes.find((quote) => quote.id === params.quoteId);
  if (!quote) {
    return <p>No quote found!</p>;
  }

  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={match.path} exact>
      <div className="centered">
        <Link className="btn--flat" to={`${match.url}/comments`}>
          Load Comments
        </Link>
      </div>
      </Route>
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;
