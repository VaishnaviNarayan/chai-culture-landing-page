# Chai Culture — Backend

Simple Express backend (minimal changes). Follow these steps to run the server and see the message "Server running on port 5000".

1) Open a Windows Command Prompt (cmd.exe).

2) Change to the project folder:

```
cd /d "C:\Users\vaish\OneDrive\Desktop\chai culture"
```

3) Install dependencies (only once):

```
npm install
```

4) Start the server:

```
node backend\server.js
```

You should see in the terminal:

```
Server running on port 5000
```

5) Test with a browser or curl:

```
# open http://localhost:5000 in a browser
curl http://localhost:5000/
```

Notes:
- I hardened file handling for `emails.json` so it is always stored in the `backend` folder (uses `__dirname`).
- If you still see an error like "Cannot find module 'express'" then run `npm install` in the project root first.
