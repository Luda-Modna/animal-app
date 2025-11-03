import { Formik, Form, Field } from 'formik';
import CONSTANTS from './../../constants';
import styles from './EditPetForm.module.sass';

function EditPetForm ({ pet, petTypes, onSave, onCancel }) {
  const initialValues = {
    name: pet.name,
    description: pet.description,
    owner: pet.owner,
    ownerContacts: pet.ownerContacts,
    city: pet.city,
    lostDate: pet.lostDate,
    petTypeId: pet.petTypeId,
  };

  const handleSubmit = (values, formikBag) => {
    onSave(pet.id, values);
    formikBag.resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {formikProps => (
        <Form className={styles.editForm}>
          <h3>Edit Pet Info</h3>
          <label>
            Name:
            <Field name='name' placeholder="Pet's name" type='text' />
          </label>
          <label>
            Your Name:
            <Field name='owner' placeholder='Owner name' />
          </label>
          <label>
            Your Contacts:
            <Field name='ownerContacts' placeholder='Your Phone' />
          </label>
          <label>
            Describe Your Pet:
            <Field name='description' placeholder='Description' type='text' />
          </label>
          <label>
            Lost Date:
            <Field type='date' name='lostDate' />
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
            Type:
            <Field as='select' name='petTypeId'>
              <option value=''>Select type</option>
              {petTypes.map(t => (
                <option key={t.id} value={t.id}>
                  {t.type}
                </option>
              ))}
            </Field>
          </label>
          <div className={styles.formButtons}>
            <button type='submit' className={styles.saveBtn}>
              Save
            </button>
            <button
              type='button'
              onClick={onCancel}
              className={styles.cancelBtn}
            >
              Cancel
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default EditPetForm;
