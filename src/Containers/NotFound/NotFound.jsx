/* eslint-disable */
// import lib(s)
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, setCount } from './NotFoundSlice';
import styles from "./NotFound.module.css";


const NotFound = () => {
    const dispatch = useDispatch()
    const count = useSelector((state) => state.NotFound.value)
    
    
    return (
        <React.Fragment>
            <div className={styles.root}>
                NotFound Component
            </div>
                <div>
                    &nbsp;<button onClick={() => dispatch(increment())}>+</button>&nbsp;
                    <input type="number" value={count} onChange={(e) => dispatch(setCount(e.target.value))} />
                    &nbsp;<button onClick={() => dispatch(decrement())}>-</button>&nbsp;
                </div>
        </React.Fragment>
    );
}

export default NotFound