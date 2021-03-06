import { connect } from 'react-redux';
import * as actionCreators from '../actions';
import NewTaskForm from '../components/NewTaskForm';

const mapStateToProps = state => ({
	tasksFetchingState: state.tasksFetchingState,
	taskAddingState: state.taskAddingState,
});

const Container = connect(mapStateToProps, actionCreators)(NewTaskForm);

export default Container;
