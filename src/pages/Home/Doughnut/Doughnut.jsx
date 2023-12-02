import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { useParams } from 'react-router-dom';

import { fetchTransactionsThunk } from 'redux/transactions/operations';
import { selectTransactions } from 'redux/transactions/selectors';

import {
  DonutWrapper,
  ContentWrapper,
  Title,
  ListWrapper,
  ColoredMarker,
  ListItem,
  DoughnutScrollbar,
  NotTansactionWrapper,
  NotTansactionTitle,
} from '../Doughnut/Doughnut.styles';

ChartJS.register(ArcElement, Tooltip, Legend);

const DonutChart = () => {
  const generateColorShades = steps => {
    const colorShades = [];
    const colorStartGreen = { r: 14, g: 187, b: 105, a: 1 };
    const colorMidWhite = { r: 255, g: 255, b: 255, a: 1 };
    const colorEndGray = { r: 250, g: 250, b: 250, a: 0.2 };

    if (steps === 1) {
      colorShades.push(`rgba(${colorStartGreen.r}, ${colorStartGreen.g}, ${colorStartGreen.b}, ${colorStartGreen.a})`);
      return colorShades;
    }

    if (steps === 2) {
      colorShades.push(`rgba(${colorStartGreen.r}, ${colorStartGreen.g}, ${colorStartGreen.b}, ${colorStartGreen.a})`);
      colorShades.push(`rgba(${colorMidWhite.r}, ${colorMidWhite.g}, ${colorMidWhite.b}, ${colorMidWhite.a})`);
      return colorShades;
    }

    const greenToWhiteSteps = Math.ceil(steps / 2);
    const whiteToGraySteps = steps - greenToWhiteSteps + 1;

    const greenToWhiteRDiff = (colorMidWhite.r - colorStartGreen.r) / (greenToWhiteSteps - 1);
    const greenToWhiteGDiff = (colorMidWhite.g - colorStartGreen.g) / (greenToWhiteSteps - 1);
    const greenToWhiteBDiff = (colorMidWhite.b - colorStartGreen.b) / (greenToWhiteSteps - 1);

    const whiteToGrayRDiff = (colorEndGray.r - colorMidWhite.r) / (whiteToGraySteps - 1);
    const whiteToGrayGDiff = (colorEndGray.g - colorMidWhite.g) / (whiteToGraySteps - 1);
    const whiteToGrayBDiff = (colorEndGray.b - colorMidWhite.b) / (whiteToGraySteps - 1);

    for (let i = 0; i < greenToWhiteSteps; i++) {
      const r = Math.round(colorStartGreen.r + i * greenToWhiteRDiff);
      const g = Math.round(colorStartGreen.g + i * greenToWhiteGDiff);
      const b = Math.round(colorStartGreen.b + i * greenToWhiteBDiff);
      const a = colorStartGreen.a + (i / (greenToWhiteSteps - 1)) * (colorMidWhite.a - colorStartGreen.a);
      colorShades.push(`rgba(${r}, ${g}, ${b}, ${a})`);
    }

    for (let i = 1; i < whiteToGraySteps; i++) {
      const r = Math.round(colorMidWhite.r + i * whiteToGrayRDiff);
      const g = Math.round(colorMidWhite.g + i * whiteToGrayGDiff);
      const b = Math.round(colorMidWhite.b + i * whiteToGrayBDiff);
      const a = colorMidWhite.a + (i / (whiteToGraySteps - 1)) * (colorEndGray.a - colorMidWhite.a);
      colorShades.push(`rgba(${r}, ${g}, ${b}, ${a})`);
    }

    return colorShades;
  };

  const [data, setData] = useState({
    labels: [],
    datasets: [
      {
        label: '# of Votes',
        data: [0],
        backgroundColor: [],
        borderColor: [],
        circumference: 180,
        rotation: 270,
        borderRadius: 1,
      },
    ],
  });
  const options = {
    aspectRatio: 2,
    plugins: {
      legend: {
        display: false,
        labels: {
          usePointStyle: true,
          pointStyle: 'circle',
        },
      },
    },
  };

  const percentageData = data.datasets[0].data;
  const labelData = data.labels;
  const backgroundColors = data.datasets[0].backgroundColor;
  const { transactionsType } = useParams();
  const currentTransactions = useSelector(selectTransactions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTransactionsThunk({ type: transactionsType }));
  }, [dispatch, transactionsType]);

  const getCurrentDate = () => {
    const currentYear = new Date().getFullYear().toString();
    let currentMonth = (new Date().getMonth() + 1).toString();
    if (currentMonth.length === 1) {
      currentMonth = '0' + currentMonth;
    }
    return currentYear + '-' + currentMonth;
  };

  const currentDate = getCurrentDate();

  useEffect(() => {
    const getChartData = () => {
      if (currentTransactions) {
        const currentMonthTransactions = currentTransactions.filter(element => element.date.startsWith(currentDate));
        let totals = new Map();
        let totalSum = 0;
        if (currentMonthTransactions && currentMonthTransactions.length > 0) {
          currentMonthTransactions.forEach(element => {
            const name = element.category?.categoryName;
            if (totals.has(name)) {
              totals.set(name, totals.get(name) + element.sum);
            } else {
              totals.set(name, element.sum);
            }
            totalSum += element.sum;
          });
        }
        const sortedTotals = new Map([...totals.entries()].sort((a, b) => b[1] - a[1]));
        let resultCategories = [];
        let resultPercents = [];
        let i = 0;
        for (let [key, value] of sortedTotals) {
          resultCategories[i] = key;
          resultPercents[i] = Math.round((value / totalSum) * 100) || 0;
          i++;
        }
        const colors = generateColorShades(resultCategories.length);
        return {
          categories: resultCategories,
          percents: resultPercents,
          backgroundColorShades: colors,
          borderColorShades: colors,
        };
      }
    };

    let resultData = getChartData();

    setData({
      labels: resultData.categories,
      datasets: [
        {
          label: '# of Votes',
          data: resultData.percents,
          backgroundColor: resultData.backgroundColorShades,
          borderColor: resultData.borderColorShades,
          circumference: 180,
          rotation: 270,
          borderRadius: 1,
        },
      ],
    });
  }, [currentDate, currentTransactions]);

  return (
    <>
      {currentTransactions.length > 0 ? (
        <DonutWrapper>
          <ContentWrapper>
            <Title> {transactionsType[0].toUpperCase() + transactionsType.substring(1)} categories</Title>
            <Doughnut data={data} options={options} />
          </ContentWrapper>
          <ListWrapper>
            <DoughnutScrollbar>
              {labelData?.map((label, index) => (
                <ListItem key={index}>
                  <ColoredMarker color={backgroundColors[index]}></ColoredMarker>
                  {label} {percentageData[index]}%
                </ListItem>
              ))}
            </DoughnutScrollbar>
          </ListWrapper>
        </DonutWrapper>
      ) : (
        <DonutWrapper>
          <NotTansactionWrapper>
            <NotTansactionTitle>
              Here will be your expenses and income statistics for the current month
            </NotTansactionTitle>
          </NotTansactionWrapper>
        </DonutWrapper>
      )}
    </>
  );
};

export default DonutChart;
