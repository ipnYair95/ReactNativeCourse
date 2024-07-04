import { useEffect, useRef, useState } from "react"

enum Operator {
    add = '+',
    subtract = '-',
    multiply = 'x',
    divide = '÷'
}


export const useCalculator = () => {

    const [number, setNumber] = useState('0');

    const [prevNumber, setPrevNumber] = useState('0');

    const [formula, setFormula] = useState('');

    const lastOperation = useRef<Operator>()


    useEffect(() => {

        if (lastOperation.current) {
            console.log(formula.split(' '))
            const firstFormulaPart = formula.split(' ').at(0);
            setFormula(`${firstFormulaPart} ${lastOperation.current} ${number}`);
            return;
        }

        setFormula(number);

    }, [number])

    useEffect(() => {

        const subResult = calculateSubResult();

        setPrevNumber(`${subResult}`);     

    }, [formula])    

    const clean = () => {
        setNumber('0');
        setPrevNumber('0');
        lastOperation.current = undefined;
        setFormula('');
    }

    const deleteOperation = () => {

        const slicedNumber = number.slice(0, -1);

        if (slicedNumber.length === 0) {
            return setNumber('0');
        }

        const isLastElementNegative = slicedNumber.length === 1 && slicedNumber.includes("-");

        return isLastElementNegative
            ? setNumber('0')
            : setNumber(slicedNumber);

    }

    const toogleSign = () => {

        if (number.includes("-")) {
            return setNumber(number.replace("-", ''));
        }

        setNumber('-' + number);

    }

    const buildNumber = (numberString: string) => {

        if (number.includes('.') && numberString === '.') {
            return;
        }

        if (number.startsWith('0') || number.startsWith('-0')) {

            if (numberString === '.') {
                return setNumber(number + numberString);
            }

            if (numberString === '0' && numberString.includes('.')) {
                return setNumber(number + numberString);
            }

            if (numberString !== '0' && !number.includes('.')) {
                return setNumber(numberString);
            }

            if (numberString === '0' && !number.includes('.')) {
                return;
            }

            return setNumber(number + numberString);
        }


        setNumber(number + numberString);

    }

    const divideOperation = () => {
        setLastNumber();
        lastOperation.current = Operator.divide;
    }

    const multiplyOperation = () => {
        setLastNumber();
        lastOperation.current = Operator.multiply;
    }

    const subtractOperation = () => {
        setLastNumber();
        lastOperation.current = Operator.subtract;
    }

    const addOperation = () => {
        setLastNumber();
        lastOperation.current = Operator.add;
    }

    const setLastNumber = () => {

        calculateResult();

        setPrevNumber(number.endsWith('.') ? number.slice(0, -1) : number);

        setNumber('0');

    }

    const calculateResult = () => {

        const result = calculateSubResult();

        setFormula(`${result}`);

        lastOperation.current = undefined;

        setPrevNumber('0');

    }

    const calculateSubResult = () => {

        const [firstValue, operation, secondValue] = formula.split(' ');

        const num1 = +firstValue;
        const num2 = +secondValue;

        if (isNaN(num2)) return num1;

        const cases: { [key in any]: any } = {
            [Operator.add]: (num1 + num2),
            [Operator.subtract]: (num1 - num2),
            [Operator.multiply]: (num1 * num2),
            [Operator.divide]: (num1 / num2)
        }

        return cases[operation];

    }

    return {
        number,
        prevNumber,
        formula,
        buildNumber,
        toogleSign,
        clean,
        deleteOperation,
        divideOperation,
        multiplyOperation,
        subtractOperation,
        addOperation,
        calculateResult
    }
}
