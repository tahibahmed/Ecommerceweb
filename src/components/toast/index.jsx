import React from 'react';

const Toast = ({ message, type }) => {
    const [showToast, setShowToast] = React.useState(true);

    setTimeout(() => {
        setShowToast(false);
    }, 3000);

    return (
        <div
            className={`fixed -right-4 top-0 m-4 bg-white py-6 px-4 w-[25%] rounded-md shadow-md text-${type}
            transition-transform transform ${showToast ? 'translate-x-0' : 'translate-x-full'}`}
        >
            {message}
        </div>
    );
};

export default Toast;