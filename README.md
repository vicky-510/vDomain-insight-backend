# 🌐 VDomain Insight Backend


**API URL:** [https://vdomain-insight.onrender.com/](https://vdomain-insight.onrender.com/)



## Overview

VDomain Insight is a powerful backend API to fetch real-time WHOIS information for any domain.  
Built with ❤️ using **TypeScript**, **Node.js**, and **Express**, it provides detailed domain ownership and registration data with a simple RESTful endpoint.



## 🚀 Features

- 🔎 Real-time WHOIS data fetching
- ⏱️ Rate-limited (1 request/minute per IP)
- ⚙️ Built with TypeScript + Node.js + Express.js
- 📡 Publicly hosted on Render



## API Information

```json
{
  "api": "🌐 vDomain-insight API",
  "description": "Fetch WHOIS information for any domain in real-time. Built with ❤️ using TypeScript, Node.js, and Express.",
  "version": "v2",
  "usage": "Append ?searchedDomain=yourdomain.com to the endpoint URL to get WHOIS data.",
  "endpoints": {
    "domainLookup": {
      "method": "GET",
      "url": "/vwaran/v2/domain?searchedDomain=vwaran.tech",
      "example": "https://vdomain-insight.onrender.com/vwaran/v2/domain?searchedDomain=vwaran.tech",
      "note": "Returns WHOIS information for the specified domain"
    }
  },
  "rateLimit": {
    "info": "Each IP is limited to 1 request per minute",
    "status": "🕒 Rate limiting is active"
  },
  "author": {
    "name": "Vigneshwaran M",
    "email": "vignesh510510@gmail.com",
    "rights": "All rights reserved.",
    "github": "https://github.com/vicky-510",
    "website": "https://vwaran.tech"
  },
  "status": "✅ API is up and running"
}
```

## Example Response

```
{
  "success": true,
  "vwaran_API": {
    "WhoisRecord": {
      "domainName": "vwaran.tech",
      "parseCode": 8,
      "audit": {
        "createdDate": "2025-05-18 18:16:37 UTC",
        "updatedDate": "2025-05-18 18:16:37 UTC"
      },
      "registrarName": "Dotserve Inc",
      "registrarIANAID": "1913",
      "registryData": {
        "createdDate": "2024-07-04T17:20:36.0Z",
        "updatedDate": "2024-08-01T10:32:09.0Z",
        "expiresDate": "2025-07-04T23:59:59.0Z",
        "registrant": {
          "organization": "vwaran",
          "state": "1739",
          "country": "INDIA",
          "countryCode": "IN",
          "rawText": "Registrant Organization: MBF\nRegistrant State/Province: 1739\nRegistrant Country: IN\nRegistrant Email: Please query the RDDS service of the Registrar of Record identified in this output for contact information."
        },
        "administrativeContact": {
          "country": "INDIA",
          "countryCode": "IN",
          "rawText": "Admin Email: Please query the RDDS service of the Registrar of Record identified in this output for contact information."
        },
        "billingContact": {
          "country": "INDIA",
          "countryCode": "IN",
          "rawText": "Billing Email: Please query the RDDS service of the Registrar of Record identified in this output for contact information."
        },
        "technicalContact": {
          "country": "INDIA",
          "countryCode": "IN",
          "rawText": "Tech Email: Please query the RDDS service of the Registrar of Record identified in this output for contact information."
        },
        "domainName": "vwaran.tech",
        "nameServers": {
          "rawText": "DNS4.P02.NSONE.NET\nDNS3.P02.NSONE.NET\nDNS2.P02.NSONE.NET\nDNS1.P02.NSONE.NET\n",
          "hostNames": [
            "DNS4.P02.NSONE.NET",
            "DNS3.P02.NSONE.NET",
            "DNS2.P02.NSONE.NET",
            "DNS1.P02.NSONE.NET"
          ],
          "ips": []
        },
        "status": "clientTransferProhibited",
        "rawText": "...WHOIS raw data here..."
      },
      "contactEmail": "abuse@dotserve.website",
      "domainNameExt": ".tech",
      "estimatedDomainAge": 318
    }
  }
}
```


## Rate Limiting

- ⚠️ Important: Each IP address is limited to 1 request per minute to prevent abuse.
- 🕒 Rate limiting is active and enforced.



## 🧑‍💻 Author

<!-- Developer contact and portfolio table for credibility and follow-up -->
| Name            | Contact                     | GitHub                          | Website             |
|-----------------|-----------------------------|----------------------------------|---------------------|
| Vigneshwaran M  | vignesh510510@gmail.com     | [vicky-510](https://github.com/vicky-510) | [vwaran.tech](https://vwaran.tech) |

