import React, { useState } from 'react';

import { useMutation, gql } from '@apollo/client';

const CREATE_RAZA_MUTATION = gql`
  mutation PostMutation(
    $description: String!
    $nombre: String!
    $armas: String!
    $planeta: String!
    $papel: String!
    $rango: String!
    $habilidad: String!
    $tamano: String!
  ) {
    createRaza(description: $description, nombre: $nombre, armas: $armas, planeta: $planeta, papel: $papel, rango: $rango, habilidad: $habilidad, tamano: $tamano) {
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
`;



const CreateRaza = () => {
  const [formState, setFormState] = useState({
    nombre: '',
    description: '',
    armas: '',
    planeta: '',
    papel: '',
    rango: '',
    habilidad: '',
    tamano: ''
 
  });

  const [createRaza] = useMutation(CREATE_RAZA_MUTATION, {
    variables: {
      nombre: formState.nombre,
      description: formState.description,
      armas: formState.armas,
      planeta: formState.planeta,
      papel: formState.papel,
      rango: formState.rango,
      habilidad: formState.habilidad,
      tamano: formState.tamano
    }
  });

  

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          createRaza();
        }}
      >
        <div className="flex flex-column mt3"  >
          <input
            className="mb2"
            value={formState.nombre}
            onChange={(e) =>
              setFormState({
                ...formState,
                nombre: e.target.value
              })
            }
            type="text"
            placeholder="ingresa nombre"
          />
          <input
            className="mb2"
            value={formState.description}
            onChange={(e) =>
              setFormState({
                ...formState,
                description: e.target.value
              })
            }
            type="text"
            placeholder="ingresa descripcion"
          />

<input
            className="mb2"
            value={formState.armas}
            onChange={(e) =>
              setFormState({
                ...formState,
                armas: e.target.value
              })
            }
            type="text"
            placeholder="ingresa armas que utiliza esa raza"
          />


<input
            className="mb2"
            value={formState.planeta}
            onChange={(e) =>
              setFormState({
                ...formState,
                planeta: e.target.value
              })
            }
            type="text"
            placeholder="planeta natal"
          />

<input
            className="mb2"
            value={formState.papel}
            onChange={(e) =>
              setFormState({
                ...formState,
                papel: e.target.value
              })
            }
            type="text"
            placeholder="papel que juega en la historia"
          />


<input
            className="mb2"
            value={formState.rango}
            onChange={(e) =>
              setFormState({
                ...formState,
                rango: e.target.value
              })
            }
            type="text"
            placeholder="peligrocidad"
          />



<input
            className="mb2"
            value={formState.habilidad}
            onChange={(e) =>
              setFormState({
                ...formState,
                habilidad: e.target.value
              })
            }
            type="text"
            placeholder="habilidad ventaja de raza"
          />



<input
            className="mb2"
            value={formState.tamano}
            onChange={(e) =>
              setFormState({
                ...formState,
                tamano: e.target.value
              })
            }
            type="text"
            placeholder="tamaño"
          />


        </div>
        <button type="submit">ingresar</button>
      </form>
      <script src="public/halo.jpg"></script>
    </div>
  );
};

export default CreateRaza;