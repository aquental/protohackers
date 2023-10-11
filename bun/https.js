// http.js
export default {
  port: 3000,
  fetch(request) {
    console.log("[" + request.method + " " + request.url + "]: ", request.requestBody);
    return new Response(request.requestBody);
  },
};
