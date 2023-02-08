import { Link } from "react-router-dom";
import stocks from "../data";

import React from 'react'

function AllStocks() {
  return (
    <div className="stocks">
    {
    stocks.map((stocks) => {
    const { name, symbol } = stocks
        return (
            <ul>
             <li>
             <Link to={`/stocks/${symbol}`}>
            <div>{name}</div>
            </Link>
            </li>
            </ul>
            )
        })
        }
 </div>
  )
}

export default AllStocks