
import './calculator.css'

function Calculator_Page(){


    return(
        <div className="calc-container">
            <div className="calc">
                <div className="calc-view">

                </div>
                <div className="calc-input">
                    <button type='button' value="" id='AC'>AC</button>
                    <button type='button' value="" id='negative'>+/-</button>
                    <button type='button' value="" id='percent'>%</button>
                    <button type='button' value="" id='divide'>÷</button>
                    <button type='button' value="" id='seven'>7</button>
                    <button type='button' value="" id='eight'>8</button>
                    <button type='button' value="" id='nine'>9</button>
                    <button type='button' value="" id='multiply'>X</button>
                    <button type='button' value="" id='four'>4</button>
                    <button type='button' value="" id='five'>5</button>
                    <button type='button' value="" id='six'>6</button>
                    <button type='button' value="" id='subtract'>-</button>
                    <button type='button' value="" id='one'>1</button>
                    <button type='button' value="" id='two'>2</button>
                    <button type='button' value="" id='three'>3</button>
                    <button type='button' value="" id='add'>+</button>
                    <button type='button' value="" id='zero'>0</button>
                    <button type='button' value="" id='dot'>.</button>
                    <button type='button' value="" id='equal'>=</button>
                </div>
            </div>
        </div>
    )
}


export default Calculator_Page
