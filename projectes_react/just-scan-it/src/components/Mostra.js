import React, { useState } from 'react';
const Mostra = () => {
    const [counter, setCounter] = useState(0)
    const [counters, setCounters] = useState(1)
    const styles = {
        div: {
            backgroundColor: 'red'
        } 
    }
    const increaseByOne = () => setCounter(counter + 1)
    const setToZero = () => setCounter(0)
    const increaseByTwo = () => setCounters(counters +2)
    const setToTwo = () => setCounters(2)
    return (
        <div>
            <div style={styles.div}>{counter} {counters}</div>
            <button onClick={increaseByTwo}> plus
            </button>
            <button onClick={increaseByOne}> zero
            </button>
        </div>
    )
}
export default Mostra;