export const schema = `#graphql

type User{
    _id: ID!
    name: String!,
    email: String!,
    password: String,
    googleId: String,
    role: String!,
    avatar: String!,
    verified: Boolean!,
    createdAt: String!,
    updatedAt: String!,
}

type Course{
    _id: ID!
    title: String!
    description: String!
    instructor: String!
    ratingsAverage: String!
    ratingsQuantity: Int!
    price:Int!
    category: String!
    subCategory: String!
    level: String!
    language: String!
    whatYouWillLearn: [String!]!
    requirements: [String!]!
    createdAt: String!
    updatedAt: String!
}

# type Section{

# }

# type Lecture{

# }

type Query{
    hello: String,
    name: String,
    users: [User],
    courses: [Course],
    # sections: [Section],
    # lectures: [Lecture]
}
`;
