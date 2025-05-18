import { Router } from "express";
import { getDomainInfoFromAPI } from "../../controller/domain/domain.controller";
import { domainRateLimiter } from "../../middleware/rateLimiter";


const route = Router();

route.get('/domain', domainRateLimiter, getDomainInfoFromAPI);

export default route;


