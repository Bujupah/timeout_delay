## Build docker image
```
docker build .
```
---
## Run locally
```
yarn install
yarn start
```
---
## How to use
**Run server and ping `http://DOMAIN:3001/:TIMEOUT/test`**

### eg.
**DOMAIN**=localhost <br> 
**TIMEOUT**=20

```markdown
curl http://localhost:3001/20/test 
# Response after 20 seconds
```