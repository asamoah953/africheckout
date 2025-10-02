// components/LineChart.jsx
import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

function LineChart() {
  const chartRef = useRef(null);

  useEffect(() => {
    const xValues = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November','November','December'];
    const yValues = [0, 0.1,  0.2,  0.3,  0.4,  0.5,  0.6,  0.7,  0.8,  0.9,  1.0];

    const chartInstance = new Chart(chartRef.current, {
      type: 'line',
      data: {
        labels: xValues,
        datasets: [
          {
            fill: false,
            tension: 0,
            backgroundColor: 'rgba(0,0,255,1.0)',
            borderColor: 'rgba(0,0,255,0.1)',
            data: yValues,
          },
        ],
      },
      options: {
        plugins: {
          legend: { display: false },
          title: {
            display: true,
            font: { size: 16 },
          },
        },
      },
    });

    return () => {
      chartInstance.destroy(); // cleanup to avoid duplicate charts
    };
  }, []);

  return (
    <div className='charts'>
      <canvas ref={chartRef}></canvas>
    </div>
  );
}

export default LineChart;
