
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import './App.css';
import First from './Comp/First';
import Detail from './Comp/Detail';
import Ouutlet from './Comp/Out';
import Wrong from './Comp/Error';
import { useState } from 'react';

function App() {
  const[issue,setIssue]=useState()
  const[details,setDetails]=useState()
  const router=createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<First></First>}>
      <Route path='/' element={<Ouutlet setIssue={setIssue} setDetails={setDetails}></Ouutlet>}></Route>
      <Route path='/:id' element={<Detail details={details}></Detail>}></Route>
      <Route path='/error' element={<Wrong issue={issue}></Wrong>}></Route>
    </Route>
  ))
  return (
    <div className="App">
     <RouterProvider router={router}></RouterProvider>

      </div>
  );
}

export default App;
