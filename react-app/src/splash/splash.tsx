import Carousel from '../carousel/Carousel';
import './splash.css'

function Splash(){
    return(
        <div className='splashContainer'>
            {/* <ol>
                <li>Notes</li>
                <li>Calendar</li>
                <li>Profile</li>
                <li>Home</li>
            </ol> */}
            <Carousel />
        </div>
    )
}

export default Splash;
