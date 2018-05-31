import { connect } from 'react-redux';
import * as actionCreators from '../actions';
import NewTaskForm from '../components/NewTaskForm';

const mapStateToProps = state => ({
//  newTaskText: state.newTaskText,
	tasksFetchingState: state.tasksFetchingState,
});

const Container = connect(mapStateToProps, actionCreators)(NewTaskForm);

export default Container;
