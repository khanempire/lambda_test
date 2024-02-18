export const apiResponseBody = (statusCode, message) => {
    return {
        statusCode,
        headers,
        body: JSON.stringify({message})
    }
}