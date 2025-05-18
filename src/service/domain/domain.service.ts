import { fetchWhoisData } from "../../utils/domain/fetcher";
import { whoisRecord } from "../../interfaces/domain/domain.interface";

export const getDomainWhoisRecord = async (searchedDomain: string): Promise<whoisRecord> => {
   
   const whoisData = await fetchWhoisData(searchedDomain);
    return whoisData as whoisRecord;
}
