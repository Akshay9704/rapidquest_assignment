import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const Strategy = () => {
    const [contri, setContri] = useState(50);
    const [retirementAge, setRetirementAge] = useState(50);

    const handleContriSliderChange = (e, newValue) => {
        setContri(newValue);
      };
    
      const handleRetirementAgeSliderChange = (e, newValue) => {
        setRetirementAge(newValue);
      };

    return (
        <div className="md:w-1/5 w-96 md:mt-10 md:ml-40 -mt-12">
            <div className='bg-gray-100 rounded-lg py-6 px-8'>
                <h4 className='font-bold text-xl'>Retirement Strategy</h4>
                <div className='mt-5 mb-5'>
                    <p className='font-bold text-sm'>Employee Contribution</p>
                    <Box className="flex gap-5" sx={{ width: 240, marginTop: "10px" }}>
                        <Slider value={contri}
                            onChange={handleContriSliderChange}
                            aria-label="Employee Contribution"
                            id="empcontri"
                            valueLabelDisplay="auto" />
                        <h5 className='font-bold'>{contri}%</h5>
                    </Box>
                    <p className='font-bold text-sm'>Retirement Age</p>
                    <Box className="flex gap-5" sx={{ width: 240, marginTop: "10px" }}>
                        <Slider value={retirementAge}
                             onChange={handleRetirementAgeSliderChange}
                            aria-label="Retirement Age"
                            valueLabelDisplay="auto" />
                        <h5 className='font-bold'>{retirementAge}%</h5>
                    </Box>
                </div>
                <div className='border w-56'></div>
                <div>
                    <div className='flex gap-6 mt-4'>
                        <p className='font-bold text-sm'>Employer Contribution</p>
                        <p className='font-bold text-sm'>8.4%</p>
                    </div>
                    <div className='flex gap-24 mt-2'>
                        <p className='font-bold text-sm'>Interest Rate</p>
                        <p className='font-bold text-sm'>5%</p>
                    </div>
                    <div className='flex flex-col md:-ml-5 gap-5 items-center'>
                        <button className="mt-5 bg-blue-700 text-white w-full py-3 px-20 rounded-xl">Update</button>
                        <p className='font-bold text-blue-700'>View Help Docs{">"} </p>
                    </div>
                </div>
            </div>
            <div className='md:flex gap-5 ml-6 mt-5 hidden'>
                <div className='border-2 border-blue-500'></div>
                <div>
                    <h5>Are you considering a</h5>
                    <h5 className='font-bold'>Housing Advance?</h5>
                    <p>Limited time reduced interest.</p>
                    <p>Learn More {">"}</p>
                </div>
            </div>
        </div>
    )
}

export default Strategy;