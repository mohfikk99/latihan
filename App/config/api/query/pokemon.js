import { gql, useQuery } from '@apollo/client';

const GET_POKEMONS = gql`
 query pokemons($first: Int!){
   pokemons(first: $first){
     id
     number
     name
     image
   }
}
`;

export default GET_POKEMONS;



