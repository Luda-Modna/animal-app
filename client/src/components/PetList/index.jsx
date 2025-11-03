import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  changePetTypeFilter,
  deletePetsThunk,
  getPetsThunk,
  getTypesThunk,
} from './../../store/slices/petsSlice';
import styles from './PetList.module.sass';

function PetsList ({
  pets,
  petTypes,
  filter,
  isFeching,
  error,
  getPets,
  getTypes,
  changePetType,
  deletePet,
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
        <button
          type='button'
          onClick={() => changePetType(null)}
          className={styles.resetBttn}
        >
          Reset Filter
        </button>
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
            <p className={styles.petsType}>
              {petTypes.find(t => t.id === p.petTypeId).type}
            </p>
            <div>
              <button>Edit</button>
              <button className={styles.deleteBttn} onClick={() => deletePet(p.id)}>Delete</button>
            </div>
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
  deletePet: id => dispatch(deletePetsThunk(id)),
});

const mapStateToProps = ({ petsData }) => petsData;

export default connect(mapStateToProps, mapDispatchToProps)(PetsList);
