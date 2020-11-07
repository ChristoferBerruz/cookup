import * as functions from 'firebase-functions';


export const helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});

export const login = functions.https.onRequest(async (request, response) => {
    const name = request.query.name;
    response.send("Hello " + name + "!");
});