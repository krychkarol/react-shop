import React, { useEffect, useState } from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { publicReq } from '../request';
import { Link } from 'react-router-dom';

const Slider = () => {

    const [ slider, setSlider ] = useState();
    const [ size, setSize ] = useState(0);

    useEffect(() => {
        const getSlider = async () => {
            try{
                const res = await publicReq.get("slides");
                setSlider(res.data);
                setSize(res.data.length);
            }
            catch(err){}
        };
        getSlider();
    },[]);

    const [ active, setActive ] = useState(0);

    const next = () => {
        setActive(active === size - 1 ? 0 : active + 1);
    };
    const prev = () => {
        setActive(active === 0 ? size - 1 : active - 1)
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
            {slider?.map((item, index) => (
                <div className={index === active ? 'slide active' : 'slide'} key={index}>
                    {index === active && (
                        <div className='wrapper'>
                            <div className='image'>
                                <img src={item.img} alt='#' />
                            </div>
                            <div className='desc'>
                                <div className='title'>
                                    {item.desc}
                                </div>
                                <div className='btn'>
                                    <Link to={item.path}>
                                        <button>Pokaż</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    )
}

export default Slider
