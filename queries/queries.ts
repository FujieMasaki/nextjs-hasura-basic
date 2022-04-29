import { gql } from '@apollo/client'

export const GET_USERS = gql`
  query GetUsers {
    users(order_by: { create_at: desc }) @client {
      id
      name
      create_at
    }
  }
`

export const GET_USERS_LOCAL = gql`
  query GetUsers {
    users(order_by: { create_at: desc }) @client {
      id
      name
      create_at
    }
  }
`

export const GET_USERIDS = gql`
  query GetUsersIds {
    users(order_by: { create_at: desc }) {
      id
      name
      create_at
    }
  }
`

export const GET_USERBY_ID = gql`
  query GetUserById($id: uuid) {
    users_by_pk(id: $id) {
      id
      name
      create_at
    }
  }
`

export const CREATE_USER = gql`
 mutation CreateUser($name: $n){
  insert_users_one(object: {name:$name}){
  id
  name
  created_at
}
}
`
