import { useRef, useState } from "react";

import classes from "./Checkout.module.css";

const isEmpty = (value) => value.trim() === "";
const isFiveChars = (value) => value.trim().length === 5;

const Checkout = (props) => {
  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    igAccount: true,
    date: true,
    notes: true,
  });

  const nameInputRef = useRef();
  const igAccountInputRef = useRef();
  const dateInputRef = useRef();
  const notesInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredIgAccount = igAccountInputRef.current.value;
    const enteredDate = dateInputRef.current.value;
    const enteredNotes = notesInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredIgAccountIsValid = !isEmpty(enteredIgAccount);
    const enteredDateIsValid = !isEmpty(enteredNotes);
    // const enteredPostalIsValid = isFiveChars(enteredDate);

    setFormInputsValidity({
      name: enteredNameIsValid,
      igAccount: enteredIgAccountIsValid,
      date: enteredDateIsValid,
      notes: true,
    });

    const formIsValid =
      enteredNameIsValid &&
      enteredIgAccountIsValid &&
      enteredDateIsValid;

    if (!formIsValid) {
      return;
    }

    props.onConfirm({
        name: enteredName,
        igAccount: enteredIgAccount,
        date: enteredDate,
        notes: enteredNotes
    })
  };

  const nameControlClasses = `${classes.control} ${
    formInputsValidity.name ? "" : classes.invalid
  }`
  const igAccountControlClasses = `${classes.control} ${
    formInputsValidity.igAccount ? "" : classes.invalid
  }`
  const dateControlClasses = `${classes.control} ${
    formInputsValidity.date ? "" : classes.invalid
  }`
  const notesControlClasses = `${classes.control} ${classes.notes} ${
    formInputsValidity.notes ? "" : classes.invalid
  }`


  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameControlClasses}>
        <label htmlFor="name">Nombre</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!formInputsValidity.name && <p>Porfavor ingresar nombre válido!</p>}
      </div>
      <div className={igAccountControlClasses}>
        <label htmlFor="igAccount">Instagram</label>
        <input type="text" id="igAccount" ref={igAccountInputRef} />
        {!formInputsValidity.igAccount && <p>Porfavor ingresar instagram válido!</p>}
      </div>
      <div className={dateControlClasses}>
        <label htmlFor="date">Fecha de Entrega</label>
        <input type="text" id="date" ref={dateInputRef} />
        {!formInputsValidity.date && <p>Porfavor ingresar fecha válida!</p>}
      </div>
      <div className={notesControlClasses}>
        <label htmlFor="notes">Notas</label>
        <textarea type="text" id="notes" ref={notesInputRef} />
        {!formInputsValidity.notes && <p>Porfavor ingresar notas válidas!</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancelar
        </button>
        <button className={classes.submit}>Confirmar</button>
      </div>
    </form>
  );
};

export default Checkout;
