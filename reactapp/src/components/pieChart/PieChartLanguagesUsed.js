import React, { useContext, useEffect } from 'react';
import AppContext from '../../context/AppContext';
import { Pie } from 'react-chartjs-2';
import { chartColors } from './colors';

const PieChartLanguagesUsed = () => {
    const { languageTotals } = useContext(AppContext);

    let colorsToUse = [];
    let valuesToUse = [];
    let keysToUse = [];
    useEffect(() => {
        // Remove languages that don't meet 5% minimum
        var sum = Object.values(languageTotals).reduce(function (a, b) {
            return a + b;
        }, 0);
        let otherTotal = 0;
        for (let i = 0; i <= Object.values(languageTotals).length - 1; i++) {
            // Check if valid language to show (greater then 5% of total code base)
            if (Object.values(languageTotals)[i] / sum <= 0.03) {
                otherTotal += Object.values(languageTotals)[i];
                Object.keys(languageTotals).splice(i, 1);
                Object.values(languageTotals).splice(i, 1);
            } else {
                keysToUse.push(Object.keys(languageTotals)[i]);
                valuesToUse.push(Object.values(languageTotals)[i]);
            }
        }

        if (otherTotal > 0) {
            // One or more languages making up 5% or less, so push other key and other value
            keysToUse.push('Other');
            valuesToUse.push(otherTotal);
        }

        // Setting the proper colors for each language
        for (let i = 0; i <= keysToUse.length; i++) {
            if (chartColors.hasOwnProperty(keysToUse[i])) {
                colorsToUse.push(chartColors[keysToUse[i]]);
            } else {
                colorsToUse.push('#808080');
            }
        }
    });

    const options = {
        elements: {
            arc: {
                borderWidth: 0,
            },
        },
        animation: {
            duration: 0,
        },
    };

    const data = {
        maintainAspectRatio: false,
        responsive: false,
        labels: keysToUse,
        datasets: [
            {
                data: valuesToUse,
                backgroundColor: colorsToUse,
                hoverBackgroundColor: colorsToUse,
            },
        ],
    };

    // eslint-disable-next-line
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
