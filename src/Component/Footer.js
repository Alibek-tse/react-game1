import React from 'react'
import github from '../source/pngwing.com.png'
import rsschool from '../source/rs_school_js.svg'
import youtube from '../source/youtube-1-64x64.png'
export default function Footer() {
    return (
        <div className="footer">
            <a className="link" href="https://github.com/Alibek-tse/react-game" target="_blank" rel="noopener noreferrer"><img className="img" src={github} alt="github"></img>2021</a>
            <a href="https://rs.school/js/" target="_blank" rel="noopener noreferrer"><img className="logo" src={rsschool} alt="rs-school"></img></a>
            <a href="/" target="_blank" rel="noopener noreferrer"><img className="youtube" src={youtube} alt="youtube"></img></a>
        </div>
    )
}
