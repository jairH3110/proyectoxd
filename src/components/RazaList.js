import React from 'react';
import Raza from './Raza';
import { useQuery, gql } from '@apollo/client';

const FEED_QUERY = gql`
  
query{
  razas{
   id
    nombre
    description
    armas
    planeta
    papel
    rango
    habilidad
    tamano
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
          <th>armas usadas</th>
          <th>planeta natal</th>
          <th>papel jugado en la guerra</th>
          <th>peligrocidad</th>
          <th>habilidad</th>
          <th>tamaño</th>
        </tr>
        </thead>
        <tbody background= "halo.jpg">

        {data && data.razas.map(( raza) => {return (
            <tr key={raza.id}>
              <td>{raza.id}</td>
              <td>{raza.nombre}</td>
              <td>{raza.description}</td>
              <td>{raza.armas}</td>
              <td>{raza.planeta}</td>
              <td>{raza.papel}</td>
              <td>{raza.rango}</td>
              <td>{raza.habilidad}</td>
              <td>{raza.tamano}</td>

            </tr>

          )})}

        </tbody>
      </table>
      <script src="public/halo.jpg"></script>
    </div>


  );
};

export default RazaList;