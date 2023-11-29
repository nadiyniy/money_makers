import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { 
    Chart as ChartJS, 
    ArcElement, 
    Tooltip, 
    Legend } from 'chart.js';
    import {
      DonutWrapper,
      ContentWrapper,
      Title,
      ListWrapper,
      ColoredMarker,
      ListItem,
    } from '../Doughnut/Doughnut.styles';

ChartJS.register(
    ArcElement, 
    Tooltip, 
    Legend
    );

const DonutChart = () => {
    const data = {
        labels: ['Hobby', 'Products', 'Cinema', 'Health'],
        datasets: [
            {
                label: '# of Votes',
                data: [45, 25, 20, 10],
                backgroundColor: [
                  'rgba(14, 187, 105, 1)',
                  'rgba(14, 243, 135, 1)',
                  'rgba(250, 250, 250, 1)',
                  'rgba(250, 250, 250, 0.2)',
                ],
                borderColor: [
                  'rgba(14, 187, 105, 1)',
                  'rgba(14, 243, 135, 1)',
                  'rgba(250, 250, 250, 1)',
                  'rgba(250, 250, 250, 0.2)',
                ],
                circumference: 180,
                rotation: 270,
                borderRadius: 1,
              },
            ],
          }
    
    const options = {
        aspectRatio: 2,
            plugins: {
                legend: {
                    display: false,
                    labels: {
                        usePointStyle: true,
                        pointStyle: 'circle',
                      }
                }
            }
        }
      
      const percentageData = data.datasets[0].data;
      const labelData = data.labels;
      const backgroundColors = data.datasets[0].backgroundColor;
    
      return (
        <DonutWrapper>
      <ContentWrapper>
        <Title>Expenses categories</Title>
        <Doughnut data={data} options={options} />
      </ContentWrapper>
      <ListWrapper>
        <ul style={{ display: 'flex', flexDirection: 'column' }} >
          {labelData.map((label, index) => (
            <ListItem key={index} >
              <ColoredMarker style={{ backgroundColor: backgroundColors[index] }}
              ></ColoredMarker>
              {label} {percentageData[index]}%
            </ListItem>
          ))}
        </ul>
      </ListWrapper>
    </DonutWrapper>
      );
 }

export default DonutChart;