import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getPetsThunk, getTypesThunk } from './../../store/slices/petsSlice';

function PetsList ({ pets, petTypes, isFeching, error, getPets, getTypes }) {
  useEffect(() => {
    getTypes();
    getPets();
  }, []);

  return (
    <ul>
      {pets.map(p => (
        <li key={p.id}>
          <p>
            {p.name}, {p.description}
          </p>
          <p>
            {p.owner}, {p.ownerContacts}, {p.city}
          </p>
          <p>{p.lostDate}</p>
          <p>{petTypes.find(t => t.id === p.petTypeId).type}</p>
        </li>
      ))}
    </ul>
  );
}

const mapDispatchToProps = dispatch => ({
  getPets: () => dispatch(getPetsThunk()),
  getTypes: () => dispatch(getTypesThunk()),
});

const mapStateToProps = ({ petsData }) => petsData;

export default connect(mapStateToProps, mapDispatchToProps)(PetsList);
