# NODEMAILER Demo

This project gives you a demonstration on a very useful 3rd party package for nodeJs known as **nodemailer**.
nodemailer is a module for Node.js applications to allow easy email sending.  

visit the official [nodemailer website](https://nodemailer.com) for more details on this module

## Installation 
```
npm i nodemailer
```

## Usage
* Create transporter
  ```
  const transporter = nodemialer.createTransporter({
    service:"gmail", //for gmail
    auth:{
        user:"YOUR EMAIL",
        pass:"your PASS-KEY from .env" //use gooogle 2 step verification generated password
    }
  }); 
  ```
* Send mail with details
    ```
    transporter.sendMail(details,() => {}) // details has from,to,subject,body of the mail and use callback function to resolve the returned promise
    ```