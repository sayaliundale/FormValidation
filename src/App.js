import React from 'react'
import Form from './Form';
import DisplayForm from './DisplayForm';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css"

export const App = () => {
  return (
    <>
      <Router>
        <Routes>
            <Route path="/" element={<Form/>}/>
            <Route path="/display" element={<DisplayForm/>}/>
        </Routes>
      </Router>
    </>
  )
}
export default App;
