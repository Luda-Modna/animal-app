import React from 'react';
import { Form, Formik, Field, ErrorMessage } from 'formik';
import CONSTANTS from '../../constants';

function PetForm () {
  const initialValues = {
    name: '',
    owner: '',
    ownerContacts: '',
    description: '',
    city: CONSTANTS.CITIES[0],
    lostDate: '',
    petTypeId: '1',
  };
  const handleSubmit = (values, formikBag) => {
    console.log(values)
    formikBag.resetForm();
  };
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
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
          <label>
            Pet's type:
            <select
              name='petTypeId'
              value={formikProps.values.petTypeId}
              onChange={formikProps.handleChange}
            >
              {[{ id: 1, type: 'parrot' }].map(t => (
                <option key={t.id} value={t.id}>
                  {t.type}
                </option>
              ))}
            </select>
          </label>
          <button type='submit'>Add Pet</button>
        </Form>
      )}
    </Formik>
  );
}

export default PetForm;
