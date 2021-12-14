import React, { useEffect, useState } from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const Slider = () => {

    //TMP DATA
    const data = [
        {
            img: 'https://ambasadapiekna.com/userdata/public/gfx/3083/be-my-barber-zestaw-full.jpg',
            desc: 'Akcesoria do brody!',
            link: ''
        },
        {
            img: 'https://5.allegroimg.com/s1024/0ceb7e/e78142f84b829dda0db4bd28b835',
            desc: 'Nowa dostawa!',
            link: ''
        },
        {
            img: 'https://jakubwiacek.com/wp-content/uploads/2019/12/3b544544e9d770f6742b78d9f2a5ba77.png',
            desc: 'Polecany zestaw!',
            link: ''
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
                        <div className='wrapper'>
                            <div className='image'>
                                <img src={item.img} alt='#' />
                            </div>
                            <div className='desc'>
                                <div className='title'>
                                    {item.desc}
                                </div>
                                <div className='btn'>
                                    <button>Pokaż</button>
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
