import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ChuckImage from '../../assets/chuck-image.png';
import { BodyContainer, Button, Image, Input, Joke, SearchContainer } from './style';

export default function Body () {
    const [search, setSearch] = useState({
        joke: '',
        searchKeyword: '',
        searchUrl: 'https://api.chucknorris.io/jokes/search?query='
    })
    const [currentCategory, setCurrentCategory] = useState("")
    const [currentJoke, setCurrentJoke] = useState("")

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const result = await axios.get('https://api.chucknorris.io/jokes/random');
        setSearch({
            ...search,
            joke: result.data.value
        });
    }
    
    const getJoke = () => {
        if(currentCategory === ""){
            axios.get('https://api.chucknorris.io/jokes/random')
            .then((res) => {
                setCurrentJoke(res.data.value)
            })
        }
    }

    const searchJoke = (event) => {
        console.log(event.target.value)
        setSearch({
            ...search,
            searchKeyword: event.target.value
        })
    }

    const fetchMyJoke = async () => {
        const result = await axios.get(search.searchUrl + search.searchKeyword);
        console.log(result.data.result);
    
        const jokePosition = Math.floor(Math.random()*result.data.result.length + 1);
        console.log( jokePosition );
        setSearch({
          ...search,
          joke: result.data.result[jokePosition].value
        })
      }

    return (
        <BodyContainer>
            <Image src={ChuckImage} alt="Chuck Image"/>
            <SearchContainer>
                <Input 
                    placeholder="Search your joke here!!!!"
                    type="text"
                    onChange={searchJoke}
                />
                <Button onClick={fetchMyJoke}>Search</Button>
                <Button onClick={() => getJoke()}>I'm lucky</Button>
            </SearchContainer>
            <Joke>{currentJoke}{search.joke}</Joke>
        </BodyContainer>
    )
}