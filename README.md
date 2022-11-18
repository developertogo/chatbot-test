# chatbot-test

Test a specific task reminder chatbot running on WebSocket - ws://localhost:5555 and http://localhost:7777

This repo uses the chatbot test framework, [Botium](https://botium-docs.readthedocs.io/en/latest/)


# Installation

Please install node.js if you have not done so.

```
npm install -g botium-bindings
npm install -g botium-connector-websocket
botium-bindings init mocha
npm install && npm run mocha
```

# Unit Tests

Simply run:
```
$ npm test
```
Below it shows a sample test run:

<img width="609" alt="image" src="https://user-images.githubusercontent.com/649541/202780483-99e7fdad-41b4-4078-86cb-29170f8b5b90.png">

# NOTE

## spec/convo/give_me_a_picture.convo.txt

This file is installed by one of botium packages. I couldn't figure out how to avoid it.
