import React, { Component } from 'react';
import { connect } from 'react-redux';
import Gantt from '../../components/gantt/gantt'
import './ganttView.css'
import { selectTasks } from '../../actions/gantt'
import {setBL} from '../../actions/project'
import GToolbar from '../../components/gantt/gToolbar'

class GanttView extends Component {
    constructor(props) {
        super(props)
        this.onTaskSelect = this.handleTaskSelect.bind(this)
    }

    componentDidMount() {
    }

    handleTaskSelect = (task, state, e) => {
        console.log(task)
        return (task, state, e)
    }

    handleSetBL = () => {
        let selected = this.props.selected;
        this.props.setBL(selected)
    }

    handleUnsetBL(){

    }

    render() {
        return (
            <div>
                <div className='gantt-container'>
                    <GToolbar
                        setBL = {this.handleSetBL}
                        unsetBL = {this.handleUnsetBL}
                    />
                    <Gantt
                        tasks={this.props.data}
                        config={this.props.config}
                        onTaskMultiSelect={this.props.onTaskSelect}
                        onTaskDblClick = {this.props.onTaskDblClick}
                    />
                    <p>{this.props.selected}</p>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        data: state.gantt.data,
        config: state.gantt.config,
        selected: state.gantt.use.selected
    }
}

const mapDispatchToProps = dispatch => {
    return {
        zoomIn: '',
        zoomOut: '',
        doNewTaks: '',
        doNewLink: '',
        editTask: '',
        onTaskSelect: (tasks, state, e) => {
            dispatch(selectTasks(tasks))
            
        },
        onTaskDblClick: (id) => {
        },
        setBL : (selected) => {
            if(selected.length > 0){
                dispatch(setBL("1", selected))
            }
            
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GanttView)