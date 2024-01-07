import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { PieChart } from '@mui/x-charts/PieChart';
import { useMediaQuery } from 'react-responsive';

const EmpData = [80, 90, 100, 120, 140, 160, 180, 200, 220, 240, 250, 270];
const EmpeData = [80, 90, 100, 120, 140, 160, 180, 200, 220, 240, 250, 270];
const IntData = [80, 90, 100, 120, 140, 160, 180, 200, 220, 240, 250, 270];
const xLabels = [
    '20',
    ' ',
    '25',
    ' ',
    '30',
    ' ',
    '35',
    ' ',
    '40',
    ' ',
    '60',
    ' ',
    '65',
];

const totalData = EmpData.map((value, index) => value + EmpeData[index] + IntData[index]);
const totalValue = totalData.reduce((acc, value) => acc + value, 0);

const data = [
    { label: 'Group A', value: 0.9 * totalValue },
    { label: 'Total', value: 0.1 * totalValue },
];

const Main = () => {
    const isMobile = useMediaQuery({ maxWidth: 767 });
    return (
        <div className='md:mt-12 md:ml-20 mt-7 ml-12 '>
            <div>
                <p className="text-blue-600 font-semibold">Retirement Income</p>
                <h4 className='text-2xl font-semibold'>Starting Year 2024</h4>
            </div>
            <div className='flex md:flex-row flex-col gap-5 md:gap-12 mt-6'>
                <div className='w-36'>
                    <h1 className='font-bold text-2xl'>$300,000</h1>
                    <p className='text-gray-400 text-sm font-medium'>My Goal</p>
                    <div className='border border-blue-500 mt-2'></div>
                </div>
                <div className='flex gap-8'>
                    <div className='w-36'>
                        <h1 className='font-bold text-2xl'>59%</h1>
                        <p className='text-gray-400 text-sm font-medium'>Goal Achieved</p>
                        <div className='border border-blue-500 mt-2'></div>
                    </div>
                    <div className='w-36'>
                        <h1 className='font-bold text-2xl'>$300</h1>
                        <p className='text-gray-400 text-sm font-medium'>Est. Monthly Income</p>
                        <div className='border border-blue-500 mt-2'></div>
                    </div>
                </div>
            </div>
            <div className='graph mt-12'>
                <h4 className='font-bold text-lg mb-5'>Contributions Overtime</h4>
                <BarChart
                    width={isMobile ? 350 : 500}
                    height={isMobile ? 350 : 300}
                    series={[
                        { data: EmpData, label: 'Employer', id: 'empId', stack: 'total' },
                        { data: EmpeData, label: 'Employee', id: 'empeId', stack: 'total' },
                        { data: IntData, label: 'Total Interest', id: 'intId', stack: 'total' },
                    ]}
                    xAxis={[{ data: xLabels, scaleType: 'band' }]}
                />
            </div>
            <div className='Donut mt-12 md:mb-10'>
                <h4 className='font-bold text-lg'>How do I compare to my peers?</h4>
                <p className='text-gray-400 text-sm font-medium'>These numbers represent current goal achievement</p>
                <div className='flex md:flex-row flex-col mt-5'>
                    <div>
                        <h5 className='flex gap-5'><span className='font-bold'>Age:</span>Under 30</h5>
                        <h5 className='flex mt-3 gap-5'><span className='font-bold'>Salary:</span>K 20 - K 30</h5>
                        <h5 className='flex mt-3 gap-5'><span className='font-bold'>Gender:</span>Male</h5>
                    </div>
                    <div>
                        <PieChart
                            series={[
                                {
                                    data: data,
                                    cx: 80,
                                    cy: 50,
                                    innerRadius: 30,
                                    outerRadius: 50,
                                },
                            ]}
                            height={200}
                            width={200}
                            slotProps={{
                                legend: { hidden: true },
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;