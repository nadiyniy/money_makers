import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { 
    Chart as ChartJS, 
    ArcElement, 
    Tooltip, 
    Legend } from 'chart.js';

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
                    display: true,
                    labels: {
                        usePointStyle: true,
                        pointStyle: 'circle',
                      }
                }
            }
        }
        
    return <Doughnut data={data} options={options} />;
    
 }

export default DonutChart;