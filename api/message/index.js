module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const name = (req.query.name || (req.body && req.body.name));
    const responseMessage = name
        ? { text: "Hello, " + name + ". This HTTP triggered function executed successfully." }
        : { text: "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response." };

    context.res = {
        body: responseMessage
    };
}
