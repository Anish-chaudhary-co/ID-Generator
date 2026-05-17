import React from 'react';
const Generated = () => {
    const id = "SMC" + Math.floor(Math.random() * 1000000);

    return (
        <div className='flex items-center justify-center h-screen'>
            <div className='border h-150 w-100'>
                <span>this is you generated id card</span>
                <div className='border p-7 m-5'>
                    <div className='flex justify-center text-red-500 font-bold text-sm'>SAPTAGANDAKI MULTIPLE CAMPUS</div>
                    <div className='flex justify-center text-white bg-red-500 mt-2'>STUDENT ID CARD</div>
                    <div>
                        <div className='flex justify-between mt-2'>
                            <div className='border w-20 h-20'>photo</div>
                            <div className='border w-20 h-20'>QR</div>
                        </div>
                        <span className='flex justify-center m-4 font-bold'>{name}</span>
                        <div className='grid grid-cols-1'>
                            <span>ADDRESS : {address}</span>
                            <span>DOB : {dateOfBirth}</span>
                            <span>ROLL NO : 4</span>
                            <span>LEVEL : Bachelor</span>
                            <span>MOBILE : {phoneNumber}</span>
                            <span>VALIDITY : </span>
                            <span>CARD NO : {id}</span>
                        </div>
                        <div className='w-70 h-10 border flex justify-center mt-4'>code</div>
                        <span className='flex justify-center text-[10px] text-red-500 mt-4'>If found return to Saptagandaki Multiple Campus</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Generated;