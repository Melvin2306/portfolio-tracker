"use client";
import React, { useEffect, useState } from "react";

export default function PositionsTable() {
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    fetchPositions();
  }, []);

  async function fetchPositions() {
    const positions = await fetch("/api/position").then((res) => res.json());
    setPositions(positions);
  }

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

  return (
    <table>
      <thead>
        <tr>
          <th>Position</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Average Price</th>
        </tr>
      </thead>
      <tbody>
        {positions.map((position) => (
          <tr key={position.id}>
            <td>{position.name}</td>
            <td>{position.price}</td>
            <td>{position.quantity}</td>
            <td>{averagePrice(positions)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
