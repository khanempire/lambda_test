export const addUser = async () => {

    const collection = await getCollectionRef('user');
    await collection.insertOne({user:1})
    return "user added"
} 


export const getUser = async () => {
    const collection = await getCollectionRef('user');
    collection.findOne({user:1})
    return "get user successful"
} 