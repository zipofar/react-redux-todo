import { connect } from 'react-redux';
import * as actionCreators from '../actions';
import App from '../components/App';

const mapStateToProps = state => ({
	tasksFetchingState: state.tasksFetchingState,
	taskAddingState: state.taskAddingState,
	taskRemovingState: state.taskRemovingState,
	taskUpdatingState: state.taskUpdatingState,
});

const Container = connect(mapStateToProps, actionCreators)(App);

export default Container;
