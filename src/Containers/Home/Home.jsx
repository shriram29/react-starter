/* eslint-disable */
// import lib(s)
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, setCount } from './HomeSlice';
import logo from '/src/Static/favicon.svg'
import "./Home.css";

import Favicon from '/src/Static/favicon.svg'

const Home = () => {
    const dispatch = useDispatch()
    const count = useSelector((state) => state.Home.value)

    const DOCUMENTATION_LIST = [
        { url: "https://github.com/shriram29/react-starter", name: "react-starter" },
        { url: "https://redux-toolkit.js.org/introduction/getting-started", name: " Redux Toolkit" },
        { url: "https://reactrouter.com/docs/en/v6/getting-started/overview", name: "React Router" },
        { url: "https://plopjs.com/documentation/", name: "Plop" },
        { url: "https://vitejs.dev/guide/", name: "Vite" },
    ]


    return (
        <React.Fragment>
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1>react-starter</h1>
                    <div className='redux-field'>count: 
                        <button className='redux-button' onClick={() => dispatch(increment())}>+</button>
                        <input className='redux-textbox' type="number" value={count} onChange={(e) => dispatch(setCount(e.target.value))} />
                        <button className='redux-button' onClick={() => dispatch(decrement())}>-</button>

                    </div>
                    <p>
                        Create a container - <code className='codeBlock'>yarn generate</code><br /> & Replace default route - <code className='codeBlock'>{`<Route path="/" element={<Home />} />`}</code><br />
                    </p>
                    <h6 className='m-0'>Docs</h6>
                    <p className="App-links">
                        {' | '}
                        {DOCUMENTATION_LIST.map(docs => (
                            <>
                                < a
                                    className="App-link"
                                    href={docs.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {docs.name}
                                </a>
                                {' | '}
                            </>
                        ))}
                    </p>
                </header>
            </div>
        </React.Fragment>
    );
}

export default Home