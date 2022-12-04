import React from 'react'
import Typical from 'react-typical'

export default function Profile() {
  return (
    <div className='profile-container'>
        <div className='profile-parent'>
            <div className='profile-details'>
                <div className='colz'>
                    <a href='#https://web.facebook.com/sarvar.vaxobov.77'>
                        <i className='fa fa-facebook-square'>
                        
                        </i>
                    </a>
                    <a href='https://instagram.com/sarvar_vaxobov'>
                        <i className='fa fa-instagram'>
                        
                        </i>
                    </a>
                    <a href='https://github.com/SarvarVakhobov'>
                        <i className='fa fa-github-square'>
                        
                        </i>
                    </a>
                    <a href='https://linkedin.com/sarvarvaxobov'>
                        <i className='fa fa-linkedin-square'>
                        
                        </i>
                    </a>
                </div>
                <div className='profile-details-name'>
                    <span className='primary-text'>
                        {""}
                        Hello!, I'm <span className='highlighted-text'>Sarvarbek</span>
                    </span>
                </div>
                <div className='profile-details-rule'>
                    <span className='primary-text'>
                        {" "}
                        <h1>
                            {" "}
                            <Typical
                                loop={Infinity}
                                steps={[
                                    "Web developer",
                                    1000,
                                    "Junior Programmer",
                                    1000,
                                    "Freelancer",
                                    1000,
                                ]}
                            />
                        </h1>
                        <span className='profile-role-tagline'>
                            Knack of building web applications with back end operations.
                        </span>
                    </span>
                </div>
            </div>
        </div>
    </div>
  )
}
