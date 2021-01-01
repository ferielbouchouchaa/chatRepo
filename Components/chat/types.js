

User ={
    id:String,
    name:String,
    imageUri:String
}
 Message={
    id:String,
    content:String,
    createdAt:String,
    user:User
}
ChatRoom={
    id:String,
    users:[User],
    lastMessage:Message}


    export default ChatRoom;
    