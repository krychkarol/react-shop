import React, { useEffect, useState } from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const Slider = () => {

    //TMP DATA
    const data = [
        {
            img: '1'
        },
        {
            img: '2'
        },
        {
            img: '3'
        },
    ];

    const [ active, setActive ] = useState(0);
    const length = data.length;

    const next = () => {
        setActive(active === length - 1 ? 0 : active + 1);
    };
    const prev = () => {
        setActive(active === 0 ? length - 1 : active - 1)
    }


    useEffect(() => {
      const slide = setInterval(() => next(), 7777)
      return () => {
        clearInterval(slide)
      }// eslint-disable-next-line react-hooks/exhaustive-deps
    }, [active])


    return (
        <div className='slider'>
            <ArrowBackIosIcon onClick={prev} className='arrow-left'/>
            <ArrowForwardIosIcon onClick={next} className='arrow-right'/>
            {data.map((item, index) => (
                <div className={index === active ? 'slide active' : 'slide'} key={index}>
                    {index === active && (
                    <>
                        slajd nr {item.img}
                    </>
                    )}
                </div>
            ))}
        </div>
    )
}

export default Slider
