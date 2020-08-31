import {connect} from 'react-redux';
import TodoApp from '../compornent/Home';
import {inputTask,addTask} from '../actions/action';

function mapStateToProps({task, tasks}){
    return {
        task,
        tasks
    };
}

function mapDidpatchToProps(dispatch){
    return {
        addTask(task){
            dispatch(addTask(task))
        },
        inputTask(task){
            dispatch(inputTask(task))
        }
    }
}

export default connect(mapStateToProps, mapDidpatchToProps)(TodoApp)