
let json_ar = [
    {
        flag:0,
        name:"Bill Gates",
        worth:"$90B",
        birth_year:"1955",
        source:"microsoft",
        country:"USA",
        image:"https://specials-images.forbesimg.com/imageserve/59d502f931358e542c034e76/200x200.jpg?background=000000&cropX1=245&cropX2=2420&cropY1=636&cropY2=2813"
  
    },
    {
        flag:0,
        name:"Warren Buffett",
        worth:"$84B",
        birth_year:"1931",
        source:"Berkshire Hathaway",
        country:"USA",
        image:"https://specials-images.forbesimg.com/imageserve/59d5055931358e542c034ead/200x200.jpg?background=000000&cropX1=46&cropX2=693&cropY1=159&cropY2=806"
  
    },
    {
        flag:0,
        name:"Mark Zuckerberg",
        worth:"$71B",
        birth_year:"1984",
        source:"Facebook",
        country:"USA",
        image:"https://specials-images.forbesimg.com/imageserve/59d5062131358e542c034eb7/200x200.jpg?background=000000&cropX1=419&cropX2=1409&cropY1=53&cropY2=1044"
  
    },
    {
        flag:0,
        name:"Larry Ellison",
        worth:"$57B",
        birth_year:"1945",
        source:"Sun, Oracle",
        country:"USA",
        image:"https://specials-images.forbesimg.com/imageserve/59d5069b31358e542c034ec1/200x200.jpg?background=000000&cropX1=0&cropX2=2000&cropY1=227&cropY2=2228"
  
    },
    {
        flag:0,
        name:"Michael Bloomberg",
        worth:"$50B",
        birth_year:"1942",
        source:"Bloomberg",
        country:"USA",
        image:"https://specials-images.forbesimg.com/imageserve/58c1d278a7ea431f321add1f/200x200.jpg?background=000000&cropX1=0&cropX2=744&cropY1=40&cropY2=784"
  
    },
    {
        flag:0,
        name:"Renata Fayziev",
        worth:"$40B",
        birth_year:"1986",
        source:"Dental Shop",
        country:"Israel",
        image:"https://lh3.googleusercontent.com/WTfx9MLTgyMei3hbH9e9X_HWGEM-qFt-LKDRaH2fSBU-C4x354JPdATzaP-ynBdMf892VZSq2NcUQ3fCd6t9t_sjL0ZpQq9FRpIVNvGWXcsAyWLOcC4uD1fXYGcoY2VymhxsYJi7fX7drmzH_LuDiD5TPSSItM_AU_1xkr8vMpXMcT_IXkWbzeJnAlrFQPmdkv6SYDhTdYGyIjAegBb5wmbiMRGI043heYnkZF5bNcTNKL3NyPl3plltUsoxlslku5K3Z33VDLEccVLmzQWS7KOejqG3KpbSyUsHOKdcSDtyWuAOmX5Ontz7mI9vlY7cPTirOSZVIFRZ40S4dzN6PGBm7V522fogBM0ZtTP8qY1AynVTyakMopjM67DMkAlH0GfK66yeBItuCiTTLL9-k5aKUz54ECZT22atEUZxptyvcJ3zs02mta57yguFbuXeaOL7qM1hz0sP6IMcGj9sYRRXrtc8r5pGP2jdseQDdlfpEZ-vbs-UyuwGNwwAtf0wavLBYfsZeVFru9xvEccYRiXc6IsIL3geMwY4BWRk47IXj0CIGaLG0_aaIuhUOsvuy_u6jb1_d_kCtgzFDqHa4ESxWvcoPLro-2Rrt56qun8p3DMGAMI-pNdIAYCfIyzBjeDR8EB0D4N56H4_z3tllLgBiQZa81vlaNcmJQ3yh6XML-SSaMks1Qm5EgzUfm5qHbN_OaVcbIsPzTcnYpxdLplB2xzr7aUljeumNG7fvcDWPTinvU9sSjm_HCG9nzI=s866-no?authuser=0"
    },
    {
        flag:0,
        name:"Evelin Bartov",
        worth:"$1000B",
        birth_year:"2011",
        source:"Evelin Corp",
        country:"Israel",
        image:"https://lh3.googleusercontent.com/LXgYbibI7mERjFv7JUVLOHqVgqha-5tDJWp-Pa94LrobglaFanSeYmxj-y96sWnU2gRnjfT_VIic4lV28KRD6SNQrGP1HCmgvET0bApDpxO42S60ELeAk3d5H-nUv8UOgOdSNRG6l5p1X9im1W3X-ue0rUctMemvqGFgqZjxoFa33HjnJdziUwsj1xOsD-8YQTqXagjE-UHAUDnEN0pPHbZVM54BN2u2qqtH_6SvOoj7StqUfpmPyWtswTp-hmgt6GOZzNHEy3Z1uAIzyz7xiaBzLtDiD-PhCeyiaiYE1831W6Nm1rQ_SG9VQsw-hV5AzIKFhYhwUNURBZO868XG-96yokAp3A1my0LhTOwAjMpRofWrp1z0gyIEyfa_8E4y1TArpwvz5yem0tp0hR1n3qhi7HZLDhMj2uIME7xYbkkC2XZLBL6ETuWpKzLRW7-shezU7cEfJ76QK4lTg0cKwhlyleV_gtjT4H1fOYAIv0lPiAXiyMcVB9nLgiphdSk-wnW49jng_gvrosohooAbJ5Gdc5hmMqinqRhmL6yusSlyfe7mkcz49FftyheBl75HvVxIquT4NCeGQLvd1k5iR_PItTUNVQfWTADm_RAObgiV1Q1VV3GkZd21jMYzkf9E3-7TjUZLWRc4saHK11EyzZ5WbuI2SuQ3tS0AQ893j8k7OiDZXmMgJNWz4IkDEev5glPdFUeLZPAJ53O3OTgR4y6fZvF91CGcFBfsxBqFqy5Dvnwk7T_w9Pxuf1ACyio=s866-no?authuser=0"
    },
    {
        flag:0,
        name:"Elisha Bartov",
        worth:"$35B",
        birth_year:"1978",
        source:"Emerson",
        country:"Israel",
        image:"https://lh3.googleusercontent.com/8hHociuv75o4esMOVeI2DCx4VQKVPZ2PuWdQYEvdviSia8zufzQmqf64ou9VyIh0RL5NyKPVwvgqIPu91ZGVjlltVLwBnkDjL4Bvp0a6nX161JNJzx0tzzf8Z9nLsOxNS6Be9vU6aWapVc21AuDibLlmrp0fRZyusIVQzFRocGpDm1mfJIc5G359UFR6VsNsblshZfxAypeL2AIoMyJptaMYJiG3AzM2j2EVBJgUt6BYSnRoAh-jjc7ZdpdwZbGqAkvE-XaRJ8p3BzSM23Suo2rRx9Oh9xd1hXhayokVlleH1LolXJ6EQqcTs8DEM9gXSCsnrLG3IIoyK01bTlIe7MlKt56Qdak0jUAH0dPK7naK3GxelnDuAjbKhvsgxarafSSBGi3X8rPrLFo4wG1Jeg6lvXL-0xJVswXUJZ3ZsA1ugzWL7vlF1B856sUe0d2oA2ZTy4DtMKRpoqw54l9sGVkVLQjVw8fR3P7ses2SUKPxyuqG8lo4tBqFOQAFNfkjeA-KoB7iS9_ONe6jJOqG0TBmVurgBnTcZ5_Pj44IpTgBotV45AM8nemGazGtZbQzr_-FOAlxiavMSzzjskhVFpUfKy4vgLNkP5-x7G8eZVOlmbmM9LI1l8eHes510FYSa7okXG9PbrHCWZicrqF6B1UIJMudi0-zk-mszrcNJ6Xi4YgaTcMx7xP8DBdW1Z9W1oJjljcD2BTouoNiBSLJs9uJ_xeTbeL3F6hmGziPv_qqqKUI669gPoRI0p8I2Q=w1024-h768-no?authuser=0"
    }
  ]
