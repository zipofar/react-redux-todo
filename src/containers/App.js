import { connect } from 'react-redux';
import App from '../components/App';

const mapStateToProps = state => ({
    tasks: state.tasks,
    comments: state.comments,
    newTaskText: state.newTaskText,
});

export default connect(mapStateToProps)(App);
