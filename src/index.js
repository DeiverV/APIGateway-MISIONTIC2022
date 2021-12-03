const { ApolloServer } = require('apollo-server');

const authentication = require('./utils/authentication');
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');
const AuthAPI = require('./dataSources/auth_api');

const server = new ApolloServer({

    context : authentication,
    typeDefs,
    resolvers,
    dataSources: () => ({
        authAPI : new AuthAPI(),
    }),

    introspection: true,
    playground: true

});

server.listen(process.env.PORT || 4000)
    .then(({ url }) => {
    console.log(`Servidor corriendo en ${url}`)
});