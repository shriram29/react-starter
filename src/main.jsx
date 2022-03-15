import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";
import { store } from './store'
import { Provider } from 'react-redux'
import Home from './Containers/Home'
import NotFound from './Containers/NotFound'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
