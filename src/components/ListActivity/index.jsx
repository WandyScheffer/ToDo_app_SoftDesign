import React from "react";
import "./style.css";

function ListActivity(props) {

  function handleConclusion(id) {
    const task = props.activities.find((item) => item.id === id);
    const taskIndex = props.activities.indexOf(task);
    const activities = [...props.activities];
    activities[taskIndex].status = 1;
    props.setActivities([...activities]);
  }

  return (
    <table className="table table-dark table-striped listActivity">
      <thead>
        <tr>
          <th>ID</th>
          <th>Título</th>
          <th>Descrição</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {props.activities.map((activity) => {
          return (
            <tr key={activity.id}>
              <td>{activity.id}</td>
              <td>{activity.title}</td>
              <td>{activity.description}</td>
              <td>
                {!activity.status ? (
                  <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                    <button className="btn btn-danger" type="button" disabled>
                      Aguardando a finalização
                    </button>
                    <button
                      className="btn btn-success"
                      type="button"
                      onClick={() => handleConclusion(activity.id)}
                    >
                      Finalizar!
                    </button>
                  </div>
                ) : (
                  <button className="btn btn-success disabled">
                    Concluido
                  </button>
                )}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default ListActivity;
