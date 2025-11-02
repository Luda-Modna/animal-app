import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  changePetTypeFilter,
  getPetsThunk,
  getTypesThunk,
} from './../../store/slices/petsSlice';
import styles from './PetList.module.sass'


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
    <div className={styles.petsPage}>
      <section className={styles.filter}>
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
      <ul className={styles.petList}>
        {pets.map(p => (
          <li className={styles.petItem} key={p.id}>
            <p className={styles.petsName}>
              {p.name}, {p.description}
            </p>
            <p className={styles.petsText}>
              {p.owner}, {p.ownerContacts}, {p.city}
            </p>
            <p className={styles.petsText}>{p.lostDate}</p>
            <p className={styles.petsType}> {petTypes.find(t => t.id === p.petTypeId).type}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  getPets: data => dispatch(getPetsThunk(data)),
  getTypes: () => dispatch(getTypesThunk()),
  changePetType: data => dispatch(changePetTypeFilter(data)),
});

const mapStateToProps = ({ petsData }) => petsData;

export default connect(mapStateToProps, mapDispatchToProps)(PetsList);
