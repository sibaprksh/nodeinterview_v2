## Name: CodeWorkFlow

## Observations:

Cluster enabled Koa Node.js (MVC) application which is protected by `koa-helmet` module
with `DYNAMODB` as persistance

```
This application is going to serve client data that has been stored inside `DYNAMODB` 
```
Application is using different type of supporting middleware like.. `kcors`, `koa-helmet`

Once will start the server, this will expose below REST endpoints.
    
    PREFIX : /config/v2
    
    a. GET: /internal/clients
    b. GET: /clients/by-origin
    c. GET: /internal/api-key/validation
    d. GET: /internal/clients/:clientId
    e. GET: /health
    
AWS SDK automatically detects the credentials from environment & will connect with `DYNAMODB`.


