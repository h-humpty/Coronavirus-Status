import react, { useEffect, useState } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import { fetchCountries } from '../../api';
import styles from './CountryPicker.module.css';

const CountryPicker =({handleCountryChange}) =>{
    const [countries, setCountries] = useState([]);
    useEffect(() =>{
        const fetchApi = async () =>{
            setCountries(await fetchCountries());
        }
        fetchApi();
    },[])

    return (
        <FormControl className={styles.FormControl}>
            <NativeSelect defaultValue="" onChange={(e) =>handleCountryChange(e.target.value)}>
                <option value="">United States</option>
                {countries.map((country,i) => 
                <option key={i} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    )
}
export default CountryPicker;