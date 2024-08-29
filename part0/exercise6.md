```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    Note right of browser: The browser sends a POST request with JSON payload; meanwhile rendering it in the browser as per spa.js
    activate server

    Note right of server: Server gets a Payload with Form data

    server-->>browser: 201 Created
    deactivate server
```
