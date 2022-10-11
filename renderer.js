/**
 * This file is loaded via the <script> tag in the index.html file and will
 * be executed in the renderer process for that window. No Node.js APIs are
 * available in this process because `nodeIntegration` is turned off and
 * `contextIsolation` is turned on. Use the contextBridge API in `preload.js`
 * to expose Node.js functionality from the main process.
 */

 const params = `?api_key=fl6UtJPAkHn3jylC2s9P7LQ39eYd489e&api_secret=L3QCcl8zAVa3gM8ONfTsdmRcedCpBLQl&format=json`;

 async function start() {
   const headers = {
     "Access-Control-Allow-Origin": "*",
     Origin: "*",
   };
   const response = await fetch("https://runsignup.com/rest/races" + params, {
     headers,
   });
 
   const data = await response.json();
 
   console.log(data);
 }
 
 start();