import React from 'react';
import Toast from '../../../components/toast';

const Splash = () => {
    return (
        <div>
            {/* <h1 className='text-3xl font-bold text-center'>Splash</h1> */}
            <Toast message="Custom Message" type="error" />
        </div>
    )
}

export default Splash;