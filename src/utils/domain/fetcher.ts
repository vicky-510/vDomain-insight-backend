import axios from 'axios';
import { config } from '../../config/env';

export const fetchWhoisData = async (searchedDomain: string): Promise<any> => {
    const url = `https://www.whoisxmlapi.com/whoisserver/WhoisService?apiKey=${config.apiKey}&domainName=${searchedDomain}&outputFormat=JSON`;

    try{
       const response = await axios.get(url);
       return response.data.whoisRecord;
    } catch(error){
       throw new Error('Failed to fetch WHOIS data');
    }  
};