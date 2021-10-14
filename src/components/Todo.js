import React from 'react';
import PropTypes from 'prop-types';
import '../css/Todo.css';
import Checkmark from './Checkmark';

class Todo extends React.Component {
  render () {
    return (
      <div className={`list-item ${this.props.done ? 'done' : ''}`}>
        {this.props.title}
        <div className="is-pulled-right">
          <Checkmark 
          done={this.props.done}
          toggleFn={this.props.toggleFn}           
          />
          <button className="delete is-pulled-right"
          onClick={e => this.props.deleteFn(e)}
          />
        </div>
      </div>
    )
  }
}

Todo.propTypes = {
  done: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired
}

export default Todo;