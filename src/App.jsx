import { useState } from 'react'
import {NavBar} from "../components/"
import {ExploreDropDown} from "../components/explore-drop-down"
import {Route, Routes} from "react-router"
import {Home,Auth,Login,Register,MyLearning,Profile,Explore,InProgress, Finished, Statistics, Info,Settings,Edit} from "./pages"

function App() {


  return (
    <>
      <NavBar/>
      <ExploreDropDown/>
      <Routes>
        <Route index element={<Home/>} />

        <Route element={<Auth/>}>
          <Route path='/auth/login' element={<Login/>}/>
          <Route path="/auth/register" element={<Register/>}/>
        </Route>

        <Route element={<MyLearning/>}>
          <Route path='/my-learning/in-progress' element={<InProgress/>}/>
          <Route path='/my-learning/finished' element={<Finished/>}/>
          <Route path='/my-learning/statistics' element={<Statistics/>}/>
        </Route>

        <Route path='/profile' element={<Profile/>}>
          <Route index element={<Info/>}/>
          <Route path='/profile/settings' element={<Settings/>}/>
          <Route path='/profile/edit' element={<Edit/>}/>
        </Route>

        <Route path='/course/*' element={<Course/>}/>

        <Route path='/explore/*' element={<Explore/>}/>
      </Routes>
    </>
  )
}

export default App
