import React from 'react';
import { ChartTitle, ChartWrapper } from './TransactionsChart.styled';

const TransactionsChart = ({ transactionsType }) => {
  return (
    <ChartWrapper>
      <ChartTitle>{transactionsType[0].toUpperCase() + transactionsType.slice(1)} categories</ChartTitle>
    </ChartWrapper>
  );
};

export default TransactionsChart;
