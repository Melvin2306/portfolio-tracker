"use client";

import { toast } from "react-toastify";
import React, { useEffect, useState } from "react";
import twelvedata from "twelvedata";

export default function PositionsTable() {
  const [positions, setPositions] = useState([]);
  const [currentPrice, setCurrentPrice] = useState(0);
  const [error, setError] = useState(null);

  async function fetchPositions() {
    const positions = await fetch("/api/position").then((res) => res.json());
    setPositions(positions);
  }

  /// Twelvedata API ///

  // configure the client with your API key

  // initialize and use the client

  const client = twelvedata(config);

  // time series

  console.log(positions);

  let params = {
    symbol: "AAPL",
    interval: "1min",
    outputsize: 1,
  };

  client
    .timeSeries(params)
    .then((data) => {
      setCurrentPrice(data.values[0].close);
    })
    .catch((error) => {
      setError(error);
      console.log(error);
    });

  let averagePrice;

  averagePrice = (positions) => {
    let sum = 0;
    let totalQuantity = 0;
    for (let i = 0; i < positions.length; i++) {
      sum += positions[i].price * positions[i].quantity;
      totalQuantity += positions[i].quantity;
    }
    return sum / totalQuantity;
  };

  if (error || !positions || !currentPrice) {
    toast(error, { type: "error" });
  }

  useEffect(() => {
    fetchPositions();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Position</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Average Price</th>
          <th>Current Price</th>
        </tr>
      </thead>
      <tbody>
        {positions.map((position) => (
          <tr key={position.id}>
            <td>{position.name}</td>
            <td>{position.price}</td>
            <td>{position.quantity}</td>
            <td>{averagePrice(positions)}</td>
            <td>{currentPrice}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
