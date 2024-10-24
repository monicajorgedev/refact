import { useState } from "react"

const Calculadora = () => {
    
    const [numberOne, setNumberOne] = useState('')
    const [numberTwo, setNumberTwo] = useState('')
    const [resultado, setResultado] = useState('')
    
    function suma () {
        numberOne && numberTwo ? (setResultado(parseFloat(numberOne) + parseFloat(numberTwo))) : setResultado('')
        setNumberOne('')
        setNumberTwo('')
    }
    function resta () {
        numberOne && numberTwo ? (setResultado(parseFloat(numberOne) - parseFloat(numberTwo))) : setResultado('')
        setNumberOne('')
        setNumberTwo('')
    }
    function multiplication (){ 
        numberOne && numberTwo ? (setResultado(parseFloat(numberOne) * parseFloat(numberTwo))) : setResultado('')
        setNumberOne('')
        setNumberTwo('')
    }
    function division () {
        numberOne && numberTwo ? (setResultado(parseFloat(numberOne) / parseFloat(numberTwo))) : setResultado('')
        setNumberOne('')
        setNumberTwo('')
    }

    return (
        <>
            <h2>Calculadora</h2>
            <input type="number" value={numberOne} onChange={(e)=> setNumberOne(e.target.value)} placeholder='Introduce número 1'>
            </input>
            <input type="number" value={numberTwo} onChange={(e)=> setNumberTwo(e.target.value)} placeholder='Introduce número 2'>
            </input>
            <div className='botones'>
                <button onClick={suma}>Suma</button>
                <button onClick={resta}>Resta</button>
                <button onClick={multiplication}>Multiplicación</button>
                <button onClick={division}>Division</button>
            </div>
            <p>Resultado: {resultado}</p>
        </>
    )
}


export default Calculadora