import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    /**
     * Filter and return list based on price
     * @param {*} price == '$' || '$$' || '$$$'
     */
    function filterResultsByPrice(price) {
        return results.filter(result => {
            return result.price == price;
        });
    }

    return (
        //many layout issues can be solved by flex: 1
        <>
            <SearchBar
                term={term}
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}
            />
            {errorMessage ? <Text>Something went wrong</Text> : null}

            <ScrollView>
                <ResultsList title="Cost Effective"
                    results={filterResultsByPrice('$')}
                />
                <ResultsList title="Bit Pricier"
                    results={filterResultsByPrice('$$')}
                />
                <ResultsList title="Big spender"
                    results={filterResultsByPrice('$$$')}
                />
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({

});

export default SearchScreen;
