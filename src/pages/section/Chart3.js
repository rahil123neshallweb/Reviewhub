import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

function Chart3() {


    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend
    );

    const options = {
        indexAxis: 'y',
        elements: {
            bar: {
                borderWidth: 2,
            },
        },
        responsive: true,
        maintainAspectRatio: true,
        aspectRatio: 2,
        plugins: {
            legend: {
                position: 'right',
            },
            title: {
                display: false,
                text: 'Chart.js Horizontal Bar Chart',
            },
        },
        scales: {
            x: {
                grid: {
                    display: false, // Hide x-axis grid lines
                },

            },
            y: {
                grid: {
                    display: false, // Hide y-axis grid lines
                },
                ticks: {
                    borderColor: 'rgba(255, 0, 0, 1)',
                    borderWidth: 5,
                    backgroundColor: 'rgba(255, 0, 0, 1)',
                    padding: 2,
                },
            },
        }
    };

    const labels = ['January', 'February', 'March', 'April'];

    const data = {
        labels,
        datasets: [
            {
                label: 'Dataset 1',
                data: [50, 40, 80, 65],
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: 'Dataset 2',
                data: [75, 85, 12, 100],
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ],
    };


    return (
        <div>
            <Bar options={options} data={data} />
        </div >
    )
}

export default Chart3
