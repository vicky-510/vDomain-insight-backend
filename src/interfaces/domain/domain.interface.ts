
export interface whoisRegistrant{
   organiZation: string;
   state: string;
   country: string;
   countryCode: string;
   rawText: string;

}

export interface whoisNameServers{
  rawText: string;
  hostNames: string[];
  ips: string[];
}

export interface whoisRecord{
  createdDate: string;
  updatedDate: string;
  expiresDate: string;
  registrant: whoisRegistrant;
  administrativeContact?: whoisRegistrant;
  technicalContact?: whoisRegistrant;
  domainName: string;
  nameServers: whoisNameServers;
  status: string;
  rawText: string;
  parseCode: string;
  audit?: {
    createdDate: string;
    updatedDate: string;
  };
  registrarName?: string;
  registrarIANAID?: string;
  [key: string]: any;   

}
