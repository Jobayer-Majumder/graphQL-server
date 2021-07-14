const graphql = require('graphql');
const {GraphQLObjectType, GraphQLString, GraphQLSchema} = graphql;



const books = [
    {name: 'habluder programming', author: 'jhankar', id: '1'},
    {name: 'algorithm', author: 'subin', id: '2'},
    {name: 'data structure', author: 'jobayer', id: '3'},
]


const bookType = new GraphQLObjectType({
    name: 'book',
    fields: () => ({
        id: {type: GraphQLString},
        name: {type: GraphQLString},
        author: {type: GraphQLString}
    })
})

const RootQuery = new GraphQLObjectType({
    name: 'RootQuery',
    fields: {
        book: {
            type: bookType,
            args: {id: {type: GraphQLString}},
            resolve(parent, args){
               return books.find(b => args.id === b.id)
            }
        }
    }
})


module.exports = new GraphQLSchema({
    query: RootQuery
})