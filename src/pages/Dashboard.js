import React from 'react';
import { Link } from 'react-router-dom';
import Stocks from "../data";
import Nav from '../components/Nav';



function Dashboard() {
  return (
    <div>
        <Nav />
         <section>
        <h1>Dashboard</h1>
        {
            Data.map((stocks) => {
                const { title, symbol } = Stocks;

                return (
                 <Link key={symbol} to={`/stocks/${symbol}`}>
                <h2>{title}</h2>
                 </Link>
                    );
                    })
        }
            </section>
    </div>
  )
}

export default Dashboard