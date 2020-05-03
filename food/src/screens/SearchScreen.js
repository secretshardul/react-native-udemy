import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async (searchTerm) => {
        console.log('hobo');
        try{
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'san jose'
                }
            });
            setResults(response.data.businesses);
        }
        catch(error) {
            console.log(error);
            setErrorMessage('Something went wrong');
        }
    }
    // show some values initially
    // bad code: component is re-rendered when state is updated.
    // this will be called in infinite loop.

    // searchApi('pasta');
    useEffect(() => {
        searchApi('pasta')
    }, []);

    return (
        <View>
            <SearchBar
                term={term}
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}
            />
            <Text>{term}</Text>
            {errorMessage ? <Text>Something went wrong</Text> : null}
            <Text>We have found {results.length} results</Text>
        </View>
    );
}

const styles = StyleSheet.create({

});

export default SearchScreen;
