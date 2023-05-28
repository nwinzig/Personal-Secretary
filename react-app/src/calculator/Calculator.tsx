
import './calculator.css'
import { useState } from 'react'
function Calculator_Page(){

    let [value, setValue] = useState<number | string>('')
    // let [holdVal, setHoldVal] = useState<number | string>('')
    let [value2, setValue2] = useState<number | string>('')
    let [operator, setOperator] = useState('')
    let [negative, setNegative] = useState(false)



    const handleOperator = (op:string) => {
        setOperator(op)
    }

    const handleClear = () => {
        setValue('')
        setValue2('')
        // setHoldVal('')
        setOperator('')
        setNegative(false)
    }

    const handleValues = (val:string) => {
        console.log(value)
        //check if inputing value for primary or secondary number
        if(value && operator){
            if(value2){
                console.log('inn')
                setValue2(value2 + val)
            }
            else{
                setValue2(value)
                setValue(val)
            }
            console.log('val 2',value2)
        } else{
            setValue(value+val)
        }
    }

    const handleCalculation = () => {
        console.log(value, operator, value2)
        let result:number
        let val1:number = Number(value2)
        let val2:number = Number(value)
        switch(operator){
            case '+':
                result = val1 + val2
                setValue(result)
                setValue2('')
                break
            case '-':
                result = val1 - val2
                setValue(result)
                setValue2('')
                break
            case '/':
                result = val1 / val2
                setValue(result)
                setValue2('')
                break
            case '*':
                result = val1 * val2
                setValue(result)
                setValue2('')
                break
            case '%':
                result = val1/ 100
                setValue(result)
                setValue2('')
                break
        }
    }

    return(
        <div className="calc-container">
            <div className="calc">
                <div className="calc-view">
                    {value ? value : 0}
                </div>
                <div className="calc-input">
                    <button type='button' onClick={() => handleClear()} id='AC'>AC</button>
                    <button type='button' value="" id='negative'>+/-</button>
                    <button type='button' onClick={() => handleOperator('%')} id='percent'>%</button>
                    <button type='button' onClick={() => handleOperator('/')} id='divide'>÷</button>
                    <button type='button' onClick={() => handleValues('7')} id='seven'>7</button>
                    <button type='button' onClick={() => handleValues('8')} id='eight'>8</button>
                    <button type='button' onClick={() => handleValues('9')} id='nine'>9</button>
                    <button type='button' onClick={() => handleOperator('*')} id='multiply'>X</button>
                    <button type='button' onClick={() => handleValues('4')} id='four'>4</button>
                    <button type='button' onClick={() => handleValues('5')} id='five'>5</button>
                    <button type='button' onClick={() => handleValues('6')} id='six'>6</button>
                    <button type='button' onClick={() => handleOperator('-')} id='subtract'>-</button>
                    <button type='button' onClick={() => handleValues('1')} id='one'>1</button>
                    <button type='button' onClick={() => handleValues('2')} id='two'>2</button>
                    <button type='button' onClick={() => handleValues('3')} id='three'>3</button>
                    <button type='button' onClick={() => handleOperator('+')} id='add'>+</button>
                    <button type='button' onClick={() => handleValues('0')} id='zero'>0</button>
                    <button type='button' onClick={() => handleValues('.')} id='dot'>.</button>
                    <button type='button' onClick={() => handleCalculation()} id='equal'>=</button>
                </div>
            </div>
        </div>
    )
}


export default Calculator_Page
