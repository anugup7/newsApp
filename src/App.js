import React, { useState } from 'react'
import NavBar from './components/NavBar'
import News from './components/News'
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

export const App = () => {
  const pageSize = 5;
  const apiKey = process.env.REACT_APP_NEWS_API
  const [progress, setProgress] = useState(0);

    return (
      <div>
        <Router>       
        <NavBar/>
        <LoadingBar
        color='#f11946'
        progress={progress}        
      />
        <Routes>
          <Route exact path='/' element={<News apiKey={apiKey} setProgress={setProgress}  key='general' pageSize={pageSize} country='in' category='general'/>}/> 
          <Route path='/business' element={<News apiKey={apiKey} setProgress={setProgress}  key='business' pageSize={pageSize} country='in' category='business'/>}/>
          <Route path='/entertainment' element={<News apiKey={apiKey} setProgress={setProgress}  key='entertainment' pageSize={pageSize} country='in' category='entertainment'/>}/> 
          <Route path='/health' element={<News apiKey={apiKey} setProgress={setProgress}  key='health' pageSize={pageSize} country='in' category='health'/>}/> 
          <Route path='/science' element={<News apiKey={apiKey} setProgress={setProgress}  key='science' pageSize={pageSize} country='in' category='science'/>}/>  
          <Route path='/sports' element={<News apiKey={apiKey} setProgress={setProgress}  key='sports' pageSize={pageSize} country='in' category='sports'/>}/>  
          <Route path='/technology' element={<News apiKey={apiKey} setProgress={setProgress}  key='technology' pageSize={pageSize} country='in' category='technology'/>}/>       
        </Routes>        
        </Router>
       
      </div>
    )
}
export default App;


