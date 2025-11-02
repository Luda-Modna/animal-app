import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  changePetTypeFilter,
  getPetsThunk,
  getTypesThunk,
} from './../../store/slices/petsSlice';

function PetsList ({
  pets,
  petTypes,
  filter,
  isFeching,
  error,
  getPets,
  getTypes,
  changePetType,
}) {
  const { petType } = filter;

  useEffect(() => {
    getTypes();
  }, []);

  useEffect(() => {
    getPets(filter);
  }, [petType]);

  return (
    <>
      <section>
        {petTypes.map(t => (
          <label key={t.id}>
            <input
              checked={petType == t.id}
              type='radio'
              name='petType'
              value={t.id}
              onChange={() => {
                changePetType(t.id);
              }}
            />
            {t.type}
          </label>
        ))}
      </section>
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
    </>
  );
}

const mapDispatchToProps = dispatch => ({
  getPets: data => dispatch(getPetsThunk(data)),
  getTypes: () => dispatch(getTypesThunk()),
  changePetType: data => dispatch(changePetTypeFilter(data)),
});

const mapStateToProps = ({ petsData }) => petsData;

export default connect(mapStateToProps, mapDispatchToProps)(PetsList);
