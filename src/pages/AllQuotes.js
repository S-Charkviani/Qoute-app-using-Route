import React, { useEffect } from 'react'
import useHttp from '../components/hooks/use-http';
import { getAllQuotes } from '../components/lib/api';
import QuoteList from '../components/quotes/QuoteList'
import LoadingSpinner from '../components/UI/LoadingSpinner';
import NoQuotesFound from '../components/quotes/NoQuotesFound'


const Dummy_Quotes=[
    {id: 'q1', author: 'Natia', text :'Dont throw pearls to pigs'},
    {id: 'q2', author: 'Nini', text :'work hard, drama harder'},
    {id: 'q3', author: 'Levan', text :"I'm a lone wolf"},

]

const AllQuotes = () => {
  const {sendRequest, status, data:loadedQoutes, error}= useHttp(getAllQuotes, true);
useEffect(()=>{
  sendRequest();
},[sendRequest]);

if (status==='pending'){
  return(
    <div className='centered'>
      <LoadingSpinner/>
    </div>
  )
}

if(error){
  return <p className='="centered focused'>{error}</p>
}

if (status==='completed'&&(!loadedQoutes||loadedQoutes.length===0)){
  return <NoQuotesFound />;
}

  return <QuoteList quotes={loadedQoutes} />
};

export default AllQuotes