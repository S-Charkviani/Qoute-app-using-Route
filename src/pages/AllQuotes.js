import React from 'react'
import QuoteList from '../components/quotes/QuoteList'


const Dummy_Quotes=[
    {id: 'q1', author: 'Natia', text :'Dont throw pearls to pigs'},
    {id: 'q2', author: 'Nini', text :'work hard, drama harder'},
    {id: 'q3', author: 'Levan', text :"I'm a lone wolf"},

]

const AllQuotes = () => {
    console.log('test')
  return <QuoteList quotes={Dummy_Quotes} />
};

export default AllQuotes