import React from "react";
import "./style.css";

class ListActivity extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...props };
  }

  componentDidMount() {
    this.timerId = setInterval(() => this.setState({ ...this.props }), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  handleConclusion(id) {
    const task = this.props.activities.find(item => item.id === id);
    const taskId = this.props.activities.indexOf(task);
    const activities = [...this.props.activities]
    activities[taskId].status = 1;
    this.props.setState({
        activities
    });
  }

  render() {
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
          {this.state.activities.map((activity) => {
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
                        onClick={() => this.handleConclusion(activity.id)}
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
}

export default ListActivity;
