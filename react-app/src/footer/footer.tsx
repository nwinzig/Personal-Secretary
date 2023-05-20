import './footer.css'


function Footer(){
    return(
        <div className='footerContainer'>
            <div id='addMarginRight'>
                Designed and Developed by <span>
                    <a href='https://www.linkedin.com/in/noah-winzig-30588b231/' target='_blank'
                    id='removeTextDecor'
                    className='linkedinLink'>
                        Noah Winzig
                    </a>
                </span>
            </div>
            <div id='addMarginLeft'>
                Check out the <span>
                    <a href='https://github.com/nwinzig/Personal-Secretary'
                    target='_blank'
                    id='removeTextDecor'
                    className='linkedinLink'>
                        Repository
                    </a>
                </span>
            </div>
        </div>
    )
}

export default Footer
