import React, { useState } from 'react';

const TransactionsChart = ({ transactionsType }) => {
  const [transaction] = useState(transactionsType);
  return <div>TransactionsChart: {transaction}</div>;
};

export default TransactionsChart;
