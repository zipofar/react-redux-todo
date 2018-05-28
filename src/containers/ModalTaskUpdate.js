import { connect } from 'react-redux';
import * as actionsCreators from '../actions';
import ModalTaskUpdate from '../components/ModalTaskUpdate';

const mapStateToProps = state => ({
  modalTaskUpdate: state.modalTaskUpdate,
  initialValues: state.loadTaskForUpdate,
});

const Container = connect(mapStateToProps, actionsCreators)(ModalTaskUpdate);

export default Container;
