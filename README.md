# Usage

```shell
git clone https://github.com/Ayub-Begimkulov/node-ts-postgres-starter.git
cd node-ts-postgres-starter
rm -rf .git
npm install
mv .env.example .env
```

Start for development:
```shell
docker-compose -f docker-compose.dev.yml up
```

Start for production:
```shell
docker-compose up
```
## Debugging

To debug node.js server in vscode you can use this launch.json config:

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "attach",
      "name": "Launch Program",
      "address": "localhost",
      "port": 9229,
      "localRoot": "${workspaceFolder}/src",
      "remoteRoot": "/app/src",
      "protocol": "inspector",
      "sourceMapPathOverrides": {
        "/app/*": "${workspaceRoot}/*"
      },
      "restart": true
    }
  ]
}
```

