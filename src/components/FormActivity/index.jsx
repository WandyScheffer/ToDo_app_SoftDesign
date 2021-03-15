import React, { useState } from "react";

import "./style.css";

function FormActivity(props) {
  
  const initialFormValues = {
    id: 1,
    title: "",
    description: "",
    status: 0,
  };

  const [activity, setActivity] = useState(initialFormValues);

  function handleFormSubmit(event) {
    event.preventDefault();
    
    setActivity({
      ...activity,
      id: activity.id + 1,
    });

    props.setActivitiesArray([...props.activitiesArray, activity]);
  }

  function storageFormValues(event) {
    const fieldName = event.target.getAttribute("name");
    let fieldValue = event.target.value;
    if (fieldName === "status") {
      fieldValue = !parseInt(fieldValue) ? 1 : 0;
    }
    setActivity({
      ...activity,
      [fieldName]: fieldValue,
    });
  }

  return (
    <form onSubmit={handleFormSubmit} className="formActivity">
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Título da atividade:
        </label>
        <input
          type="text"
          name="title"
          id="title"
          className="form-control"
          placeholder="ex. Refatorar classe App"
          onChange={storageFormValues}
          value={activity.title}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Descrição:
        </label>
        <textarea
          id="description"
          className="form-control"
          name="description"
          rows="10"
          cols="40"
          maxLength="140"
          placeholder="ex. Necessária verificação do..."
          onChange={storageFormValues}
          value={activity.description}
        ></textarea>
      </div>

      <div className="mb-3 form-check">
        <label className="form-check-label">Tarefa finalizada?</label>
        <input
          id="status"
          className="form-check-input"
          type="checkbox"
          name="status"
          onChange={storageFormValues}
          value={activity.status}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Cadastrar
      </button>
    </form>
  );
}

export default FormActivity;
