import React from 'react';
import { Pie } from 'react-chartjs-2';
import { chartColors } from './colors';

const PieChartLanguagesUsed = () => {
    const options = {
        elements: {
            arc: {
                borderWidth: 0,
            },
        },
        animation: {
            duration: 1000,
            delay: 5000,
            easing: 'easeOutQuart',
        },
    };

    const data = {
        maintainAspectRatio: false,
        responsive: false,
        labels: ['a', 'b', 'c', 'd'],
        datasets: [
            {
                data: [300, 50, 100, 50],
                backgroundColor: chartColors,
                hoverBackgroundColor: chartColors,
            },
        ],
    };

    let chartInstance = null;
    return (
        <>
            <div
                style={{
                    width: '20%',
                    height: '20%',
                    border: '2px solid #495b69',
                    padding: '1rem',
                    borderRadius: '10%',
                    backgroundColor: '#1f272d',
                }}>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        color: 'white',
                        fontFamily: 'Roboto-Regular',
                    }}>
                    Most Used Languages
                </div>
                <Pie
                    data={data}
                    options={options}
                    ref={(input) => {
                        chartInstance = input;
                    }}
                />
            </div>
        </>
    );
};

export default PieChartLanguagesUsed;
