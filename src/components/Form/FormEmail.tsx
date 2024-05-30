import React from "react";
import styles from "./FormEmail.module.scss";
import { FormProvider, useForm } from "react-hook-form";
import { DateTimePicker } from "../DatePicker/DatePicker";
import { MailServices } from "../../services/MailService";
import { FormEmail } from "../../interfaces/FormEmail";
import { FormEmailResolver } from "../../validations/FormEmailValidation";
import Button from "../Button/Button";
import warningIcon from "../../assets/images/warning-icon.svg";
import { useNavigate } from "react-router-dom";

interface FormProps {}

const Form: React.FC<FormProps> = () => {
  const formMethods = useForm<FormEmail>({ resolver: FormEmailResolver });
  const {
    formState: { errors },
    register,
    handleSubmit,
    reset,
  } = formMethods;

  const navigate = useNavigate();

  async function onSubmit(values: FormEmail) {
    const { status } = await MailServices.sendEmail(values);
    if (status === 201) {
      reset();
      navigate("/success");
    }
  }

  return (
    <FormProvider {...formMethods}>
      <div className={styles.card}>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="destinationName">Nome do destinatário</label>
          <input
            {...register("destinationName")}
            id="destinationName"
            name="destinationName"
            type="text"
          />
          {errors.destinationName && (
            <div className={styles.errors}>
              <img src={warningIcon} className={styles.errors__icon} alt="" />
              <p className={styles.message}>{errors.destinationName.message}</p>
            </div>
          )}

          <label htmlFor="destinationAddress">E-mail do destinatário</label>
          <input
            {...register("destinationAddress")}
            type="email"
            id="destinationAddress"
            name="destinationAddress"
          />
          {errors.destinationAddress && (
            <div className={styles.errors}>
              <img src={warningIcon} className={styles.errors__icon} alt="" />
              <p className={styles.message}>
                {errors.destinationAddress.message}
              </p>
            </div>
          )}

          <label htmlFor="dueDate">Data</label>
          <DateTimePicker name="dueDate" />
          {errors.dueDate && (
            <div className={styles.errors}>
              <img src={warningIcon} className={styles.errors__icon} alt="" />
              <p className={styles.message}>{errors.dueDate.message}</p>
            </div>
          )}

          <label htmlFor="subject">Assunto</label>
          <input
            {...register("subject")}
            type="text"
            id="subject"
            name="subject"
          />
          {errors.subject && (
            <div className={styles.errors}>
              <img src={warningIcon} className={styles.errors__icon} alt="" />
              <p className={styles.message}>{errors.subject.message}</p>
            </div>
          )}

          <label htmlFor="body">Mensagem</label>
          <textarea {...register("body")} id="body" name="body"></textarea>
          {errors.body && (
            <div className={styles.errors}>
              <img src={warningIcon} className={styles.errors__icon} alt="" />
              <p className={styles.message}>{errors.body.message}</p>
            </div>
          )}

          <Button text="Enviar" />
        </form>
      </div>
    </FormProvider>
  );
};

export default Form;
