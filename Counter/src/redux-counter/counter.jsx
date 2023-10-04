import React from "react";
import { increment, decrement } from "./action";
import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
    const dispatch = useDispatch();
    const state = useSelector((state) => state.counter.count)

    const increse = () => {
        dispatch(increment())
    }
    const decrese = () => {
        dispatch(decrement())
    }
    return (
        <div>
            <h1>Counter:{state}</h1>
            <button onClick={increse} style={{ margin: '20px' }} > +</button>

            <button onClick={decrese} >-</button>

        </div>
    )
}

export default Counter;

