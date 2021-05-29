import React from 'react'
import interactive from '../images/desktop/image-interactive.jpg'

function Interactive() {
    return (
        <div className="interactive">
            <div><img className="inter-img" src={interactive}/></div>
            <div className="sm">
                <h1>The leader in interactive VR,</h1>
                <p>Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand.</p>
            </div>
        </div>
    )
}

export default Interactive
