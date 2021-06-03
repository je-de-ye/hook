import {useEffect, useState} from 'react'

export default function Function() {

    const [counter, setCounter] = useState(0);

    useEffect(()=> {
        setTimeout(()=>{
            setCounter(counter + 1)
            console.log("functMain: didMount")
        },5000)
    },[])

    useEffect(()=>{
        if(counter !== 0){
            console.log("functMain: didUpdate")
        }
    },[counter])

    return (
        <div>
            <h4>Function Counter : {counter}</h4>
            {counter === 0 && <FunctionSecond />}
        </div>
    )
}

function FunctionSecond(){

    useEffect(()=> {
        console.log("functSecond: didMount")
    },[])

    useEffect(()=> {
        return (
            () => console.log("functSecond: WillUnmount")
        )
    },[])

    return (
        <div>
                Lorem ....
            </div>
    )
}
