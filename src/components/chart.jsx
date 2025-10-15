// import { useEffect, useRef } from 'react';
// import Chart from 'chart.js/auto';

// function LineChart() {
//   const chartRef = useRef(null);

//   useEffect(() => {
//     const xValues = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'November', 'December'];
//     const yValues = [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0];

//     const chartInstance = new Chart(chartRef.current, {
//       type: 'line',
//       data: {
//         labels: xValues,
//         datasets: [
//           {
//             fill: false,
//             tension: 0,
//             backgroundColor: 'white',
//             borderColor: 'white',
//             data: yValues,
//           },
//         ],
//       },
//       options: {
//         plugins: {
//           legend: { display: false },
//           title: {
//             display: true,
//             font: { size: 16 },
//             color: 'white',
//             text: 'Earnings and Revenue',
//           },
//         },
//       },
//     });

//     return () => {
//       chartInstance.destroy();
//     };
//   }, []);

//   return (
//     <div className='charts'>
//       <canvas ref={chartRef}></canvas>
//     </div>
//   );
// }

// export default LineChart;

import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

function LineChart() {
  const chartRef = useRef(null);

  useEffect(() => {
    const xValues = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'November', 'December'];
    const yValues = [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0];

    const chartInstance = new Chart(chartRef.current, {
      type: 'line',
      data: {
        labels: xValues,
        datasets: [
          {
            fill: false,
            tension: 0,
            backgroundColor: 'white',
            borderColor: 'white',
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
            color: 'white',
            text: 'Earnings and Revenue',
          },
        },
        scales: {
          x: {
            ticks: { color: 'white' },
            grid: { color: 'rgba(255, 255, 255, 0.2)' },
          },
          y: {
            ticks: { color: 'white' },
            grid: { color: 'rgba(255, 255, 255, 0.2)' },
          },
        },
      },
    });

    return () => {
      chartInstance.destroy();
    };
  }, []);

  return (
    <div className='charts'>
      <canvas ref={chartRef}></canvas>
    </div>
  );
}

export default LineChart;
