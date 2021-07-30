import { gql } from "@apollo/client";
//add event here
//then add to actions on front end and go to backend typedefs and resolvers

//Mutations are the CUD
//Add event, login, create user, delete event by id

export const ADD_EVENT = gql`
mutation addEvent($name: String!) {
  addEvent(name: $name) {
    _id
    name
    date
    description
    locationName
    link
    category
    locationAddress
    imageLink
    
  }
}

`

// export const DELETE_EVENT = gql`
// mutation deleteEvent($name: String!) {
//   deleteEvent(name: $name) {

//   }
// }
// `

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;



export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;


// export const ADD_ORDER = gql`
//   mutation addOrder($products: [ID]!) {
//     addOrder(products: $products) {
//       purchaseDate
//       products {
//         _id
//         name
//         description
//         price
//         quantity
//         category {
//           name
//         }
//       }
//     }
//   }
// `;