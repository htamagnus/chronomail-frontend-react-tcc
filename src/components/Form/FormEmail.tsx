import React from 'react';
import styles from './Form.module.scss';
import { FormProvider, useForm } from 'react-hook-form';
import { DateTimePicker } from '../DatePicker/DatePicker';
import { MailServices } from '../../services/MailService';
import { FormEmail } from '../../interfaces/FormEmail';
import { FormEmailResolver } from '../../validations/FormEmailValidation';

interface FormProps {
}

const Form: React.FC<FormProps> = () => {
  const formMethods = useForm<FormEmail>({ resolver: FormEmailResolver });
  const {
    formState: { errors },
    register,
    handleSubmit,
    reset,
  } = formMethods;

  async function onSubmit(values: FormEmail) {
    const { status } = await MailServices.sendEmail(values);
    if (status === 201) {
      reset();
    }
  }

  return (
    <FormProvider {...formMethods}>
      <div className={styles.card}>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="destinationName">Nome do destinatário</label>
          <input {...register('destinationName')} id="destinationName" name="destinationName" type='text'/>
          {errors.destinationName && (
            <p className={styles.error}>{errors.destinationName.message}</p>
          )}

          <label htmlFor="destinationAddress">E-mail do destinatário</label>
          <input {...register('destinationAddress')} type='email' id="destinationAddress" name="destinationAddress" />
          {errors.destinationAddress && (
            <p className={styles.error}>{errors.destinationAddress.message}</p>
          )}

          <label htmlFor="dueDate">Data</label>
          <DateTimePicker name="dueDate" />
          {errors.dueDate && (
            <p className={styles.error}>{errors.dueDate.message}</p>
          )}

          <label htmlFor="subject">Assunto</label>
          <input {...register('subject')} type="text" id="subject" name="subject" />
          {errors.subject && (
            <p className={styles.error}>{errors.subject.message}</p>
          )}

          <label htmlFor="body">Mensagem</label>
          <textarea {...register('body')} id="body" name="body"></textarea>
          {errors.body && (
            <p className={styles.error}>{errors.body.message}</p>
          )}

          <button className={styles.button} type="submit">Enviar</button>
        </form>
      </div>
    </FormProvider>
  );
};

export default Form;
