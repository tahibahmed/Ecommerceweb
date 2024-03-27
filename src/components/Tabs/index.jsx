import React from 'react';
import { Link } from 'react-router-dom';
import style from './style.module.css'




const Tabs = ({ active, onChange, children }) => {
    return (
        <>
            <div className='flex mt-5  justify-center pb-4'>
                {
                    children.map((c, index) => (
                        <Link
                            key={index}
                            onClick={() => onChange(index)}
                            className={`${active === index ? `${style.activeTab}` : `${style.normalTab}`} sm:text-[16px]  xsm:text-[12px]`}
                        >
                            {c.props.title}
                        </Link>
                    ))
                }
            </div>
            <div>{children[active]}</div>
        </>
    )
}

export default Tabs