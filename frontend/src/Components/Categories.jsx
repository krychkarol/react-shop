import React from 'react'

const Categories = () => {

    //TMP DATA
    const data = [
        {
            img: 'https://timshop.pl/wp-content/uploads/2020/02/beard-oil5.jpg',
            desc: 'Broda',
            link: ''
        },
        {
            img: 'https://www.menshairstylesnow.com/wp-content/uploads/2018/03/Best-Mens-Haircuts-For-Thick-Hair-Comb-Over.jpg',
            desc: 'Włosy',
            link: ''
        },
        {
            img: 'https://images.squarespace-cdn.com/content/v1/571193b4356fb09118d6d769/1558890420463-C2YT23CVOETTD4V1SX2L/image-asset.jpeg?format=1000w',
            desc: 'Akcesoria',
            link: ''
        },
    ];

    return (
        <div className='categories'>
            <div className='wrapper'>
                {data.map((item, index) => (
                <div className='item' key={index}>
                    <img src={item.img} alt='#'/>
                    <div className='info'>
                        <div className='desc'>
                            {item.desc}
                        </div>
                        <button>Pokaż</button>
                    </div>
                </div>
                ))}
            </div>
        </div>
    )
}

export default Categories
