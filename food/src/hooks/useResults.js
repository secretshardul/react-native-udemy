import { useEffect, useState } from 'react';
import yelp from '../api/yelp';

//reusing hooks: extract common logic in separate file
export default () => {
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
    useEffect(() => {
        searchApi('pasta')
    }, []);

    //return terms to be used by component using this file
    return [searchApi, results, errorMessage];
};