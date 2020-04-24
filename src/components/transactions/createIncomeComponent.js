import React, { Component } from "react";
import { Link } from "react-router-dom";

export default function CreateIncomeComponent(props) {
  const { name, price, amount } = props;
  const { onNameChange, onPriceChange, onAmountChange, onClick } = props;
  return (
    <div>
      <h1>New Transaction</h1>

      <input
        type="text"
        value={name}
        onChange={onNameChange}
        placeholder="merchant"
      />

      <input
        type="text"
        value={price}
        onChange={onPriceChange}
        placeholder="Price"
      />

      <input
        type="number"
        value={amount}
        onChange={onAmountChange}
        placeholder="date"
      />

      <button
        onClick={event => {
          onClick(event);
        }}
      >
        Save
      </button>

      <a href="/Income-list" class="btn btn-primary">
        Go back to income
      </a>
    </div>
  );
}
