import logo from './logo.svg';
import './App.css';
import { Route,Routes } from 'react-router-dom';
import { Navbar } from './Components/Navbar/Navbar';
 import { FriendshipQuotes } from './Components/Quotes/FriendshipQuotes/FriendshipQuotes';
 import { InsanityQuotes } from './Components/Quotes/InsanityQuotes/InsanityQuotes';
import { Humorousquotes } from './Components/Quotes/HumorousQuotes/HumorousQuotes';
import {Suspense, lazy } from 'react';
import { Loading } from './Loading';
 
const Home=lazy(()=>import('./Components/Home/Home').then((module)=>{console.log("moduleHome",module) 
  return {default:module.Home}}))
const Quotes=lazy(()=>import('./Components/Quotes/Quotes').then((module)=>{return {default:module.Quotes}}))
const Collection=lazy(()=>import('./Components/Collection/Collection').then((module)=>{return {default:module.Collection}}))
const MyQuotes=lazy(()=>import('./Components/MyQuotes/MyQuotes').then((module)=>{return {default:module.MyQuotes}}))

function App() {
  return (
    <Suspense fallback={<Loading/>}>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quotes" element={<Quotes />}/>
             
            
          
          <Route path="friendship-quotes" element={<FriendshipQuotes />} />
            <Route path="humorous-quotes" element={<Humorousquotes />} />
            <Route path="insanity-quotes" element={<InsanityQuotes />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/my-quotes" element={<MyQuotes />} />
        </Routes>
      </div>
    </Suspense>
  );
}
export default App;
