import React, { useEffect } from 'react';
import { Form, Formik, Field, ErrorMessage } from 'formik';
import { connect } from 'react-redux';
import CONSTANTS from '../../constants';
import { createPetThunk, getTypesThunk } from '../../store/slices/petsSlice';

function PetForm ({ petTypes, getTypes, createPet }) {
  const initialValues = {
    name: '',
    owner: '',
    ownerContacts: '',
    description: '',
    city: CONSTANTS.CITIES[0],
    lostDate: '',
    petTypeId: petTypes[0]?.id ?? '',
  };
  const handleSubmit = (values, formikBag) => {
    createPet(values);
    formikBag.resetForm();
  };

  useEffect(() => {
    getTypes();
  }, []);

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
    >
      {formikProps => (
        <Form>
          <label>
            Name:
            <Field name='name' type='text' placeholder="Pet's name" autoFocus />
          </label>
          <label>
            Your Name:
            <Field name='owner' type='text' placeholder='Your Name' />
          </label>
          <label>
            Your Contacts:
            <Field
              name='ownerContacts'
              type='text'
              placeholder='Your Contacts'
            />
          </label>
          <label>
            Describe Your Pet:
            <Field name='description' type='text' placeholder='description' />
          </label>
          <label>
            Lost Date:
            <Field name='lostDate' type='date' />
          </label>
          <label>
            City:
            <select
              name='city'
              value={formikProps.values.city}
              onChange={formikProps.handleChange}
            >
              {CONSTANTS.CITIES.map((c, i) => (
                <option key={i} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </label>
          {petTypes.length !== 0 && (
            <>
              <label>
                Pet's type:
                <select
                  name='petTypeId'
                  value={formikProps.values.petTypeId}
                  onChange={formikProps.handleChange}
                >
                  {petTypes.map(t => (
                    <option key={t.id} value={t.id}>
                      {t.type}
                    </option>
                  ))}
                </select>
              </label>
            </>
          )}
          <button type='submit'>Add Pet</button>
        </Form>
      )}
    </Formik>
  );
}
const mapDispatchToProps = diaspatch => ({
  getTypes: () => diaspatch(getTypesThunk()),
  createPet: values => diaspatch(createPetThunk(values)),
});

const mapStateToProps = ({ petsData: { petTypes } }) => ({ petTypes });

export default connect(mapStateToProps, mapDispatchToProps)(PetForm);
