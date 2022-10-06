const {gql} = require('apollo-server-express');

const typeDefs = gql`
type Query{
    getUser:User
}
type User {
    _id: ID!
    username:String!
    email:String
    bookCount:Int 
    savedBooks: [Book]
}
type Book {
    bookId:ID!
    authors:[String]
    description: String
    title:String
    image:String
    link:String
}
type Auth {
    token:ID!
    user:User
}
input BookInput{
    bookId:ID!
    authors:[String]
    description:String
    title:String!
    image:String
    link:String
}
type Mutation{
    login(email:String!,password:String!):Auth
    addUser(username:String!,email:String!,password:String!):Auth
    saveBook(data:BookInput!):User
    removeBook(data:ID!):User
}

`
module.exports = typeDefs;