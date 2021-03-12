import React from 'react';

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      activity:{
        id:null,
        title:"",
        description:"",
        status:0
      },
      activities:[],

    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.storageFormValues = this.storageFormValues.bind(this);
  }
  
  handleFormSubmit(event){
    event.preventDefault();
    this.setState({
      activities: [...this.state.activities, this.state.activity]
    })
    console.table(this.state.activities);
  }

  storageFormValues(event){
    const fieldName = event.target.getAttribute('name');
    let fieldValue = event.target.value
    if (fieldName==="status") {
      fieldValue = !parseInt(fieldValue) ? 1 : 0;
    }
    
    this.setState({
      activity:{
        ...this.state.activity,
        id:this.state.activities.length,
        [fieldName]:fieldValue
      }
    })

  }

  render(){
    document.title = "ToDo App";
    const linkIcon = document.head.querySelector('link[rel=icon]');
    linkIcon.href = "https://softdesign.com.br/wp-content/themes/bones/favicon.png"
    
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <label htmlFor="title" >Título da atividade: 
            <input 
              type="text" 
              name="title" 
              id="title" 
              placeholder="ex. Refatorar classe App"
              onChange={this.storageFormValues}
              value={this.state.activity.title}
            /> 
          </label>
          
          <br/>
          <br/>
          <label htmlFor="description" >Descrição: 
            <br/>
            <textarea 
              id="description" 
              name="description" 
              rows="10" 
              cols="40" 
              placeholder="ex. Necessária verificação do..."
              onChange={this.storageFormValues}
              value={this.state.activity.description}
            ></textarea>
          </label>
          <br/>
          <label>Tarefa finalizada? 
            <input 
              id="status" 
              type="checkbox" 
              name="status"
              onChange={this.storageFormValues}
              value={this.state.activity.status}
            />        
          </label>
          <br/>
          <br/>
          <button type="submit">Cadastrar</button>
        </form>
        <br/>
        <table>
          <tr>
            <th>ID</th>
            <th>Título</th>
            <th>Descrição</th>
          </tr>
          {this.state.activities.map(activity => {
            return (
              <tr id={activity.id}>
                <td>{activity.id}</td>
                <td>{activity.title}</td>
                <td>{activity.description}</td>
              </tr>
            )
          })}
        </table>
      </div>
      
    );
  }
}

export default App;
