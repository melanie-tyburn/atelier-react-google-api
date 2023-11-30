import './SearchBar.scss';
import { useState, useEffect } from 'react';
import CardList from '../CardList/CardList';
import axios from 'axios';
import Messages from '../Message/Messages'
import {Input} from 'semantic-ui-react'

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [apiResult, setApiResult] = useState([])
  
  const handleSubmit = (event : any) => {
    event.preventDefault();
    setQuery(event.target[0].value);
  }

    const fetchData = async (query : string) => {
			
        try {
            const response = await axios.get(`https://api.github.com/search/repositories?q=${query}`);
            setApiResult(response.data.items);
        } catch (error) {
            console.error(error)
        }
    
    }
    useEffect(() => {
      fetchData(query)
    },[query])

  
    
  return (
    <>
		
    	<div className='input-container'>
    	    <form className='form-input' onSubmit = {(event) => handleSubmit(event)}>
    	        <Input fluid icon='search'
    	            type='search'
    	            placeholder="Rechercher..."
    	            />
    	    </form>
    	</div>
        <Messages numberResults={apiResult.length}/>
     	<CardList apiResult={apiResult}/> 
        
    </>
  )
}
export default SearchBar