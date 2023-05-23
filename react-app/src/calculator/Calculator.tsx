
import './calculator.css'
import { useState } from 'react'
function Calculator_Page(){

    let [value, setValue] = useState<number | string>('0')
    let [holdVal, setHoldVal] = useState<number | string>('')
    // let [value2, setValue2] = useState('0')
    let [operator, setOperator] = useState('')
    let [negative, setNegative] = useState(false)

    const handleOperator = (op:string) => {
        setOperator(op)
    }

    const handleClear = () => {
        setValue('0')
        setHoldVal('')
        setOperator('')
        setNegative(false)
    }

    const handleValues = (val:string) => {
        //is this the first or second value
        if(value != '0' && operator !== ''){
            //second value
            if(holdVal !== '0'){
                setValue(value+val)
            } else{
                if(value === '0' && val !== '.'){
                    setHoldVal(value)
                    setValue(val)
                } else{
                    setHoldVal(value)
                    setValue('0')
                    setValue(value + val)
                }
            }
        } else{
            if(value === '0' && val !== '.'){
                setValue(val)
            }
            else{
                setValue(value+val)
            }
        }
        console.log('hold',holdVal,'op', operator,'val', value)
    }

    const handleCalculation = () => {
        let result:number
        let val1:number = Number(holdVal)
        let val2:number = Number(value)
        switch(operator){
            case '+':
                result = val1 + val2
                setValue(result)
                break
            case '-':
                result = val1 - val2
                setValue(result)
                break
            case '/':
                result = val1 / val2
                setValue(result)
                break
            case '*':
                result = val1 * val2
                setValue(result)
                break
            case '%':
                result = val1/ 100
                setValue(result)
                break
        }
    }

    return(
        <div className="calc-container">
            <div className="calc">
                <div className="calc-view">
                    {value}
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
