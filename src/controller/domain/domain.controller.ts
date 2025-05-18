import { Request, Response, NextFunction } from "express";
import { getDomainWhoisRecord } from "../../service/domain/domain.service";

export const getDomainInfoFromAPI = async (req: Request, res: Response, next: NextFunction) => {

    try{
 
        const searchedDomain = req.query.searchedDomain as string;
        const whoisRecord = await getDomainWhoisRecord(searchedDomain);

        res.status(200).json({
            success: true,
            vwaran_API: whoisRecord,
        })
    } catch(error){
       next(error);
    }
}