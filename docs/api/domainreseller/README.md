---
sidebar: auto
---
# مقدمه API نمایندگی دامین

## مقدمه API

سیستم API ثبت نمایندگی دامین میزبان پایتخت این امکان را برای شما فراهم می کند که کلیه پسوند های ارائه شده از سوی میزبان پایتخت را به صورت کاملا اتوماتیک و برنامه نویسی شده بفروشید. این API به صورت برنامه نویسی شده شامل ماژول برای WHMCS می باشد.
از طریق این API امکانات زیر در اختیار شما قرار می گیرد:
- ثبت دامین با هر پسوند
- انتقال دامین با هر پسوند
- تمدید دامین های ثبت یا منتقل شده
- دریافت Authcode یا EPP Code
- دریافت و تغییر در NameServer ها
- تغییر وضعیت Lock دامین

## فرمت پرسش و پاسخ API ثبت دامین نمایندگی میزبان پایتخت 

برای درخواست ها API از شما یک Query از پارامترها را دریافت می کند.
API پاسخ را به صورت JSON به شما می دهد.

**عملیات تصدیق:**
برای ورود به سیستم و تصدیق سامانه API Key و آدرس ایمیل شما برای Authentication لازم می باشد.

**URL:**
```
https://www.ehost.ir/billing/domainsResellerAPI/api.php
```


**مثال:**
این مثال از سیستم cURL استفاده می کند که برای Execute کردن یک درخواست از API به صورت Command-line می باشد.
 
Exemplary API Request:
```
curl 'http://www.ehost.ir/billing/domainsResellerAPI/api.php'  --data 'token=AaLc8eNZWsZtWlT9LtT7NUha&email=exampledomain@domain.com&action=RegisterDomain&sld=exampledomain&tld=com&regperiod=1&nameserver1=ns1.yourdomain.com&nameserver2=ns2.yourdomain.com&adminfirstname=test&adminlastname=test&admincompanyname=company&adminaddress1=addresss&admincity=city&adminstate=region&admincountry=US&adminpostcode=12345&adminphonenumber=1234567890&adminemail=admin@domain.com' --compressed
```
Exemplary API Response: 
```
{"result":"success","msg":"Domain has been registered"}
``` 

# عملیات API نمایندگی دامین

## REGISTERDOMAIN:
این دستور برای ثبت دامین جدید به کار می رود.

**پارامترهای Request**


|  نام  |  نوع  |  اجباری؟  |  توضیحات  | 
| --------- | --------- | --------- | -------- | 
| sld | String | Yes | Domain name | 
| tld | String | Yes | Suffix attached to domain name | 
| regperiod | Number | Yes | Registration period | 
| nameserver1 | String | Yes | First nameserver | 
| nameserver2 | String | Yes | Second nameserver | 
| nameserver3 | String | No | Third nameserver | 
| nameserver4 | String | No | Fourth nameserver | 
| nameserver5 | String | No | Fifth nameserver | 
| adminfirstname | String | Yes | First name of the admin user | 
| adminlastname | String | Yes | Last name of the admin user | 
| adminaddress1 | String | Yes | First part of admin user address | 
| adminaddress2 | String | No | Second part of admin user address | 
| admincity | String | Yes | City of the admin user | 
| adminstate | String | Yes | State/Province of the admin user | 
| adminpostcode | String | Yes | Postal/ZIP Code of the admin user | 
| admincountry | String | Yes | Country of the admin user | 
| adminphonenumber | String | Yes | Phone number in the format +NNN.NNNNNNNNNN | 
| adminemail | String | Yes | Email address of the admin user | 
| dnsmanagement | Number | No | Enables dns management for this domain | 
| emailforwarding | Number | No | Enables email forwarding for this domain | 
| idprotection | Number | No | Enables id protection for this domain |

**مثال Request:**
```
curl 'http://www.ehost.ir/billing/domainsResellerAPI/api.php' --data 'token=AaLc8eNZWsZtWlT9LtT7NUha&email=test@exampledomain.com&action=RegisterDomain&sld=exampledomain&tld=com&regperiod=1&nameserver1=ns1.yourdomain.com&nameserver2=ns2.yourdomain.com&adminfirstname=test&adminlastname=test&admincompanyname=company&adminaddress1=addresss&admincity=city&adminstate=region&admincountry=US&adminpostcode=12345&adminphonenumber=1234567890&adminemail=admin@exampledomain.com' --compressed
```
***مثال Response:***
```
{"result":"success","msg":"Domain has been registered"}
```

## TRANSFERDOMAIN
این دستور برای انتقال دامین استفاده می شود.
**Request Parameters**

| نام | نوع | اجباری؟ | توضیحات |
| ----- | ----- | ----- | ----- |
| sld | String | Yes | Domain name |
| tld | String | Yes | Suffix attached to domain name |
| transfersecret | String | No | Domain authorization code |
| regperiod | Number | Yes | Registration period |
| nameserver1 | String | Yes | First nameserver |
| nameserver2 | String | Yes | Second nameserver |
| nameserver3 | String | No | Third nameserver |
| nameserver4 | String | No | Fourth nameserver |
| nameserver5 | String | No | Fifth nameserver |
| adminfirstname | String | Yes | First name of the admin user |
| adminlastname | String | Yes | Last name of the admin user |
| adminaddress1 | String | Yes | First part of admin user address |
| adminaddress2 | String | No | Second part of admin user address |
| admincity | String | Yes | City of the admin user |
| adminstate | String | Yes | State/Province of the admin user |
| adminpostcode | String | Yes | Postal/ZIP Code of the admin user |
| admincountry | String | Yes | Country of the admin user |
| adminphonenumber | String | Yes | Phone number in the format +NNN.NNNNNNNNNN |
| adminemail | String | Yes | Email address of the admin user |
| dnsmanagement | Number | No | Enables dns management for this domain |
| emailforwarding | Number | No | Enables email forwarding for this domain |
| idprotection | Number | No | Enables id protection for this domain |


**Example Request:**
```
curl 'http://www.ehost.ir/billing/domainsResellerAPI/api.php' --data 'token=AaLc8eNZWsZtWlT9LtT7NUha&email=test@exampledomain.com&action=TransferDomain&sld=exampledomain&tld=com&transfersecret=gd23h231s21&regperiod=1&nameserver1=ns1.yourdomain.com&nameserver2=ns2.yourdomain.com&adminfirstname=test&adminlastname=test&admincompanyname=company&adminaddress1=addresss&admincity=city&adminstate=region&admincountry=US&adminpostcode=12345&adminphonenumber=1234567890&adminemail=admin@exampledomain.com' --compressed
```
**Example Response:**
```
{"result":"success","msg":"Domain transfer initiated successfully."}
```

## RENEWDOMAIN
این دستور برای تمدید دامین های ثبت یا منتقل شده استفاده می گردد.

**Request Parameters**
| نام | نوع | اجباری؟ | توضیحات |
| ----- | ----- | ----- | ----- |
| sld | String | Yes | Domain name |
| tld | String | Yes | Suffix attached to domain name |
| regperiod | Number | Yes | Registration period |

**Example Request:**
```
curl 'http://www.ehost.ir/billing/domainsResellerAPI/api.php' --data 'token=AaLc8eNZWsZtWlT9LtT7NUha&email=test@exampledomain.com&action=RenewDomain&sld=exampledomain&tld=com&regperiod=1' --compressed
```
**Example Response:**
```
{"result":"success","msg":"The domain has been successfully."}
```
## GETNAMESERVERS
این دستور برای دریافت آدرس های DNS دامین استفاده می گردد.

| نام | نوع | اجباری؟ | توضیحات |
| ----- | ----- | ----- | ----- |
| sld | String | Yes | Domain name |
| tld | String | Yes | Suffix attached to domain name |


**Example Request:**
```
curl 'http://www.ehost.ir/billing/domainsResellerAPI/api.php' --data 'token=AaLc8eNZWsZtWlT9LtT7NUha&email=test@exampledomain.com&action=GetNameservers&sld=exampledomain&tld=com' --compressed
```
**Example Response:**
```
{"result":"success","ns1":"ns1.exampledomain.com","ns2":"ns2.exampledomain.com"}
```
## SAVENAMESERVERS
این دستور برای ذخیره آدرس های NameServer برروی دامین مدنظر شما می باشد.


| نام | نوع | اجباری؟ | توضیحات |
| ----- | ----- | ----- | ----- |
| sld | String | Yes | Domain name |
| tld | String | Yes | Suffix attached to domain name |
| nameserver1 | String | Yes | First nameserver |
| nameserver2 | String | Yes | Second nameserver |
| nameserver3 | String | No | Third nameserver |
| nameserver4 | String | No | Fourth nameserver |
| nameserver5 | String | No | Fifth nameserver |


**Example Request:**
```
curl 'http://www.ehost.ir/billing/domainsResellerAPI/api.php' --data 'token=AaLc8eNZWsZtWlT9LtT7NUha&email=test@exampledomain.com&action=SaveNameservers&sld=exampledomain&tld=com&ns1=ns1.exampledomain.com&ns2=ns2.exampledomain.com' --compressed
```
**Example Response:**
```
{"result":"success"}
```

## RELASEDOMAIN
این دستور برای انجام عملیات ReleaseDomain یا آزادسازی دامین از سوی Registrar انجام می گیرد.

**Request Parameters**


| نام | نوع | اجباری؟ | توضیحات |
| ----- | ----- | ----- | ----- |
| sld | String | Yes | Domain name |
| tld | String | Yes | Suffix attached to domain name |
| newtag | String | Yes | The new tag for the domain |


**Example Request:**
```
curl 'http://www.ehost.ir/billing/domainsResellerAPI/api.php' --data 'token=AaLc8eNZWsZtWlT9LtT7NUha&email=test@exampledomain.com&action=RelaseDomain&sld=exampledomain&tld=com&newtag=1AND1-TEST' --compressed
```
**Example Response:**
```
{"result":"success"}
```

## GETEPPCODE
این دستور برای دریافت کد EEP یا Authcode دامین استفاده می گردد.


| نام | نوع | اجباری؟ | توضیحات |
| ----- | ----- | ----- | ----- |
| sld | String | Yes | Domain name |
| tld | String | Yes | Suffix attached to domain name |




**Example Request:**
```
curl 'http://www.ehost.ir/billing/domainsResellerAPI/api.php' --data 'token=AaLc8eNZWsZtWlT9LtT7NUha&email=test@exampledomain.com&action=GetEPPCode&sld=exampledomain&tld=com' --compressed
```
**Example Response:**
```
{"result":"success","eppcode":"23svxce123fds"}
```

## GETCONTACTDETAILS
این دستور برای دریافت ContactDetails و اطلاعات تماس دامین استفاده می گردد.

**Request Parameters**


| نام | نوع | اجباری؟ | توضیحات |
| ----- | ----- | ----- | ----- |
| sld | String | Yes | Domain name |
| tld | String | Yes | Suffix attached to domain name |


**Example Request:**
```
curl 'http://www.ehost.ir/billing/domainsResellerAPI/api.php' --data 'token=AaLc8eNZWsZtWlT9LtT7NUha&email=test@exampledomain.com&action=GetContactDetails&sld=exampledomain&tld=com' --compressed
```
**Example Response:**
```
{"result":"success","Registrant":{"Name":"John Doe","Company":"Company name","Address":"P.O.","City":"Amsterdam","Country":"NL","Zip_Code":"1001 GT","Email":"john@exampledomain.com","Telephone":"N\/A"}}
```

## SAVECONTACTDETAILS
این دستور برای ذخیره اطلاعات تماس یا ContactDetails یک دامین استفاده می شود.

**Request Parameters**


| نام | نوع | اجباری؟ | توضیحات |
| ----- | ----- | ----- | ----- |
| sld | String | Yes | Domain name |
| tld | String | Yes | Suffix attached to domain name |
| contactdetails | Array | Yes |   |


**Example Request:**
```
curl 'http://www.ehost.ir/billing/domainsResellerAPI/api.php' --data 'token=AaLc8eNZWsZtWlT9LtT7NUha&email=test@exampledomain.com&action=SaveContactDetails&sld=exampledomain&tld=com&contactdetails[Registrant][Name]=John%20Doe&contactdetails[Registrant][Company]=Company%20name&contactdetails[Registrant][Address]=Address&contactdetails[Registrant][City]=Amsterdam&contactdetails[Registrant][Country]=NL&contactdetails[Registrant][Zip_Code]=1001 GT&contactdetails[Registrant][Email]=test@exampledomain.com&contactdetails[Registrant][Telephone]=N/A' --compressed
```
**Example Response:**
```
{"result":"success","Registrant":{"Name":"John Doe","Company":"Company name","Address":"P.O.","City":"Amsterdam","Country":"NL","Zip_Code":"1001 GT","Email":"john@exampledomain.com","Telephone":"N\/A"}}
```

## DOMAINGETLOCKINGSTATUS
این دستور برای دریافت وضعیت دامین Lock , Unlock بودن دامین استفاده می شود.

**Request Parameters**


| نام | نوع | اجباری؟ | توضیحات |
| ----- | ----- | ----- | ----- |
| sld | String | Yes | Domain name |
| tld | String | Yes | Suffix attached to domain name |


**Example Request:**
```
curl 'http://www.ehost.ir/billing/domainsResellerAPI/api.php' --data 'token=AaLc8eNZWsZtWlT9LtT7NUha&email=test@exampledomain.com&action=domaingetlockingstatus&sld=exampledomain&tld=com' --compressed
```
**Example Response:**
```
{"result":"success","lockstatus":"unlocked"}
```

## DOMAINUPDATELOCKINGSTATUS
این دستور برای بروزرسانی وضعیت دامین Lock, Unlock بودن دامین استفاده می شود.

**Request Parameters**


| نام | نوع | اجباری؟ | توضیحات |
| ----- | ----- | ----- | ----- |
| sld | String | Yes | Domain name |
| tld | String | Yes | Suffix attached to domain name |
| lockstatus | Null/Number | No | To lock the domain, set it to '1' |

**Example Request:**
```
curl 'http://www.ehost.ir/billing/domainsResellerAPI/api.php' --data 'token=AaLc8eNZWsZtWlT9LtT7NUha&email=test@exampledomain.com&action=domainupdatelockingstatus&sld=exampledomain&tld=com&lockstatus=' --compressed
```
**Example Response:**
```
{"result":"success"}
```


 