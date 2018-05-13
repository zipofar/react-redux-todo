import React from 'react';

class App extends React.Component {

updateText = (e) => {
    this.props.updateNewTaskText({ text: e.target.value });
};

addTask = (e) => {
    e.preventDefault();
    this.props.addTask({ text: this.props.newTaskText });
};

renderTasks = (tasksFromState) => {
  const keys = Object.keys(tasksFromState);
  if (keys.length === 0) {
    return null;
  }

  return (
    <div className="mt-3">
      <ul className="list-group">
        {keys.map(k => {
          const { id, text } = tasksFromState[k];
          return <li key={id} className="list-group-item d-flex justify-content-end">{text}</li>
        })}
      </ul>
    </div>
  );
};

render() {
    return (
      <div className="col-5">
        <form onSubmit={this.addTask} className="form-inline">
          <div className="form-group mx-sm-3">
            <input onChange={this.updateText} type="text" required value={this.props.newTaskText} />
           </div>
          <button type="submit" className="btn btn-primary btn-sm">Add</button>
        </form>
        {this.renderTasks(this.props.tasks)}
      </div>
    );
  }
}

export default App;
