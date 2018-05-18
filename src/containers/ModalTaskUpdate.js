import { connect } from 'react-redux';
import * as actionsCreators from '../actions';
import ModalTaskUpdate from '../components/ModalTaskUpdate';
import { tasksSelector } from '../selectors';

const mapStateToProps = state => ({
  modalTaskUpdate: state.modalTaskUpdate,
  tasks: tasksSelector(state),
});

const Container = connect(mapStateToProps, actionsCreators)(ModalTaskUpdate);

export default Container;
