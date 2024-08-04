import { IndexType, Permission } from 'node-appwrite';

import {db,questionCollection} from '@/models/name';
import {databases} from "./config"

export default async function createQuestionCollection(){
    await databases.createCollection(db,questionCollection,questionCollection,[Permission.read("any"),
    Permission.create("users"),
    Permission.delete("users"),
    Permission.update("users"),
    ])
    console.log(`Collection ${questionCollection} created`)

    //creating attributes and indexes

   await Promise.all([
   
    databases.createStringAttribute(db,questionCollection,"title",100,true),
    
    databases.createStringAttribute(db,questionCollection,"content",10000,true),
    
    databases.createStringAttribute(db,questionCollection,"authorId",100,true),
    
    databases.createStringAttribute(db,questionCollection,"attachmentId",10000,false),
   
    databases.createStringAttribute(db,questionCollection,"tags",50,true,undefined,true),
   ])
 console.log(`Attributes created for ${questionCollection}`)

  //create indexes

  await Promise.all([
   
    databases.createIndex(db,questionCollection,"title",IndexType.Fulltext,["title"],["asc"]),
   
    databases.createIndex(db,questionCollection,"content",IndexType.Fulltext,["content"],["asc"]),
  ])



} 
  