export const handler = async (event, context) => {
    context.callbackWaitsForEmptyEventLoop = false;
    await connectDB();
    if(event.httpMethod === 'OPTIONS'){
        return apiResponseBody(200, 'success')
    }

    const {httpMethod , path} = event;
    const route = routes[path];

    if(!route?.[httpMethod]){
        return apiResponseBody(404, 'Not found');
    }

    const processHandler = route[httpMethod];
    return await processHandler(event);
}