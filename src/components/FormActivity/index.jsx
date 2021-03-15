import React from "react";

import "./style.css";

class FormActivity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activity: {
        id: 1,
        title: "",
        description: "",
        status: 0,
      },
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.storageFormValues = this.storageFormValues.bind(this);
  }

  handleFormSubmit(event) {
    event.preventDefault();

    this.setState({
      activity: {
        ...this.state.activity,
        id: this.state.activity.id + 1,
      },
    });

    this.props.setState({
      activities: [...this.props.state.activities, this.state.activity],
    });
  }

  storageFormValues(event) {
    const fieldName = event.target.getAttribute("name");
    let fieldValue = event.target.value;
    if (fieldName === "status") {
      fieldValue = !parseInt(fieldValue) ? 1 : 0;
    }

    this.setState({
      activity: {
        ...this.state.activity,
        [fieldName]: fieldValue,
      },
    });
  }

  render() {
    return (
      <form onSubmit={this.handleFormSubmit} className="formActivity">
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
            onChange={this.storageFormValues}
            value={this.state.activity.title}
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
            onChange={this.storageFormValues}
            value={this.state.activity.description}
          ></textarea>
        </div>

        <div className="mb-3 form-check">
          <label className="form-check-label">Tarefa finalizada?</label>
          <input
            id="status"
            className="form-check-input"
            type="checkbox"
            name="status"
            onChange={this.storageFormValues}
            value={this.state.activity.status}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Cadastrar
        </button>
      </form>
    );
  }
}

export default FormActivity;
