import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Form from "./Components/Form"
import Navigation from "./Components/Navigation"
import Table from "./Components/Table"
import UpdateForm from './Components/UpdateForm'
import NotFound from "./Components/NotFound"

function App() {
  return(
    <>   
    <BrowserRouter>
      <Navigation />
        <Routes>
          <Route index exact path="/" element={<Table />} />
          <Route exact path="/add" element={<Form />} />
          <Route exact path="/update/:id" element={<UpdateForm />} />
          <Route exact path="*" element={<NotFound />} />
        </Routes>
    </BrowserRouter>
    </>
  );
}

export default App
