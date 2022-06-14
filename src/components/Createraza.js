import React, { useState } from 'react';

import { useMutation, gql } from '@apollo/client';

const CREATE_RAZA_MUTATION = gql`
  mutation PostMutation(
    $description: String!
    $nombre: String!
  ) {
    createRaza(description: $description, nombre: $nombre) {
      id
      nombre
      description
    }
  }
`;



const CreateRaza = () => {
  const [formState, setFormState] = useState({
    description: '',
    nombre: ''
  });

  const [createRaza] = useMutation(CREATE_RAZA_MUTATION, {
    variables: {
      description: formState.description,
      nombre: formState.nombre
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
            value={formState.description}
            onChange={(e) =>
              setFormState({
                ...formState,
                description: e.target.value
              })
            }
            type="text"
            placeholder="A description for the raza de halo"
          />
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
            placeholder="The nombre for the raza de halo"
          />
        </div>
        <button type="submit">ingresar</button>
      </form>
      <script src="public/halo.jpg"></script>
    </div>
  );
};

export default CreateRaza;