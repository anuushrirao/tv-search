import React, { useState,useContext } from 'react'
import ShowsContext from '../context/shows/showsContext.js';
import AlertsContext from '../context/alerts/alertsContext.js';
import Alert from './Alert.js'

const Searchbar = () => {

    const [searchTerm,setSearchTerm] = useState("");
    const showsContext = useContext(ShowsContext);
    const {searchShows} = showsContext;

    const {alert,setAlert} = useContext(AlertsContext);

    const onSearchHandler = (e) =>{
        e.preventDefault();
        if(searchTerm === ""){
          setAlert("Please enter something","danger")
        } else{
          searchShows(searchTerm);
        }
    };
    
  return (
    <div className='searchbar'>
        { alert ? <Alert message={alert.message} type={alert.type} /> :null }
        <form className='searchbar_form' >
            <input type="text" placeholder='Search a Tv show' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>

            <button className='btn btn-block' onClick={onSearchHandler}>SEARCH</button>
        </form>
      
    </div>
  )
}

export default Searchbar
