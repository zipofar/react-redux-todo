import { connect } from 'react-redux';
import * as actionCreators from '../actions';
import TasksList from '../components/TasksList';
import { tasksSelector } from '../selectors';

const mapStateToProps = state => ({
  tasks: tasksSelector(state),
});

const Container = connect(mapStateToProps, actionCreators)(TasksList);

export default Container;
