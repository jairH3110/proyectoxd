import React from 'react';
import Raza from './Raza';
import { useQuery, gql } from '@apollo/client';

const FEED_QUERY = gql`
  
query{
  razas{
   id
    nombre
    description
  }
}
  
`

;
const RazaList = () => {
  /*const linksToRender = [
    {
      id: 'link-id-1',
      description:
        'Prisma gives you a powerful database toolkit 😎',
      url: 'https://prisma.io'
    },
    {
      id: 'link-id-2',
      description: 'The best GraphQL client',
      url: 'https://www.apollographql.com/docs/react/'
    }
  ];*/

  const { data } = useQuery(FEED_QUERY);

  return (
    <div >
      {data && (
        <>
          {data.razas.map(( raza) => (
            <Raza key={raza.id} raza={raza} />
          ))}
        </>
      )}


      <table>
        <thead>
        <tr>
          <th>id</th>
          <th>nombre</th>
          
          <th>descripcion</th>
        </tr>
        </thead>
        <tbody background= "halo.jpg">

        {data && data.razas.map(( raza) => {return (
            <tr key={raza.id}>
              <td>{raza.id}</td>
              <td>{raza.nombre}</td>
              <td>{raza.description}</td>

            </tr>

          )})}

        </tbody>
      </table>
      <script src="public/halo.jpg"></script>
    </div>


  );
};

export default RazaList;