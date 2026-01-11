import { useState } from 'react'
import {NavBar} from "../components/"
import {ExploreDropDown} from "../components/explore-drop-down"
import {Route, Routes} from "react-router"
import {Home} from './pages/Home'
import {Login} from './pages/Login'
import {Register} from './pages/Register'
import {MyLearning} from './pages/MyLearning'
import {InProgress} from './pages/InProgress'
import {Finished} from './pages/Finished'
import {Statistics} from './pages/Statistics'
import {Info} from './pages/Info'
import {Settings} from './pages/Settings'
import {Edit} from './pages/Edit'
import {Course} from './pages/Course'
import {Explore} from './pages/Explore'

export default function App() {


  return (
    <>
      <NavBar/>
      <ExploreDropDown/>
      <Routes>
        <Route index element={<Home/>} />

        <Route path='/auth'>
          <Route path='login' element={<Login/>}/>
          <Route path="register" element={<Register/>}/>
        </Route>

        <Route path='/my-learning' element={<MyLearning/>}>
          <Route path='in-progress' element={<InProgress/>}/>
          <Route path='finished' element={<Finished/>}/>
          <Route path='statistics' element={<Statistics/>}/>
        </Route>

        <Route path='/profile'>
          <Route index element={<Info/>}/>
          <Route path='settings' element={<Settings/>}/>
          <Route path='edit' element={<Edit/>}/>
        </Route>

        <Route path='/course/*' element={<Course/>}/>

        <Route path='/explore/*' element={<Explore/>}/>
      </Routes>
    </>
  )
}
