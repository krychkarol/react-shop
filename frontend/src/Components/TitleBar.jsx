import React from 'react'

const TitleBar = ({title, subtitle}) => {
    return (
        <div className='title-bar'>
            <div className='wrapper'>
                <div className='title'>
                    {title}
                </div>
                <div className='subtitle'>
                    {subtitle}
                </div>
            </div>
        </div>
    )
}

export default TitleBar
