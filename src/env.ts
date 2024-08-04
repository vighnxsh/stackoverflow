const env = {
    appwrite :{
        endpoint : String(process.env.NEXT_HOST_URL!),
        projectId : String(process.env.APPWRITE_PROJECT_ID!),
        apiKey : String(process.env.APPWRITE_API_KEY!)
    }
}

export default env;