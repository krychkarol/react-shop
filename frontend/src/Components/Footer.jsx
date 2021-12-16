import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='wrapper'>
                <div className='left'>
                    <div className='title'>
                        O nas
                    </div>
                    <div className='desc'>
                        Cras malesuada lobortis neque non ullamcorper. 
                        Praesent placerat, dui ac lacinia fringilla, 
                        lorem mi sagittis nisl, egestas sodales elit neque eu diam. 
                        Ut id eleifend ligula. Pellentesque eleifend, nisi eget sodales placerat, 
                        tortor turpis congue odio, sit amet molestie sem massa vitae nunc. 
                        Vivamus luctus ultrices convallis. Morbi id dui posuere, 
                        vehicula justo in, bibendum nulla. Morbi laoreet, lacus vel.
                    </div>
                    <div className='social'>
                        <FacebookIcon className='icon' />
                        <InstagramIcon className='icon' />
                        <TwitterIcon className='icon' />
                    </div>

                </div>
                <div className='right'>
                    <div className='title'>
                        Kontakt
                    </div>
                    <div className='contact'>
                        <div>
                            <AlternateEmailIcon className='icon'/> kontakt@kontakt.pl
                        </div>
                        <div>
                            <LocalPhoneIcon className='icon'/> +12 123-456-789
                        </div>
                        <div>
                            <LocationOnIcon className='icon'/> Ulica 12 / 3, 12-123 Miasto
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
