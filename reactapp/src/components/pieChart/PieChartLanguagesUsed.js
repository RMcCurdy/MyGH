import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';
import { Pie } from 'react-chartjs-2';
import { chartColors } from './colors';

const PieChartLanguagesUsed = () => {
    const { languageTotals } = useContext(AppContext);

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
        labels: Object.keys(languageTotals),
        datasets: [
            {
                data: Object.values(languageTotals),
                backgroundColor: chartColors,
                hoverBackgroundColor: chartColors,
            },
        ],
    };

    let chartInstance = null;
    return (
        <>
            <div className='chart-pie-languages-used-container'>
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
