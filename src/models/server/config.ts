import env from '@/env';

import {Avatars,Client,Databases,Storage,Users} from 'node-appwrite';

let client = new Client();
client
.setEndpoint(env.appwrite.endpoint)
.setProject(env.appwrite.projectId)
.setKey(env.appwrite.apiKey);


let avatars = new Avatars(client);
let databases = new Databases(client);
let storage = new Storage(client);
let users = new Users(client);

export {
    avatars,
    databases,
    storage,
    users
}