import React, { Component } from 'react';
import { connect } from 'react-redux';
import Gantt from '../../components/gantt/gantt'
import './ganttView.css'
import { selectTasks } from '../../actions/gantt'
import GToolbar from '../../components/gantt/gToolbar'

class GanttView extends Component {
    constructor(props) {
        super(props)

        this.onTaskSelect = this.handleTaskSelect.bind(this)
    }

    componentDidMount() {
        console.log(this.props.data)
    }

    handleTaskSelect = (task, state, e) => {
        console.log(task)
        return (task, state, e)
    }

    render() {
        return (
            <div>
                <div className='gantt-container'>
                    <GToolbar/>
                    <Gantt
                        tasks={this.props.data}
                        config={this.props.config}
                        onTaskMultiSelect={this.props.onTaskSelect}
                        onTaskDblClick = {this.props.onTaskDblClick}
                    />
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        data: state.gantt.data,
        config: state.gantt.config
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
            console.log(tasks)
            dispatch(selectTasks(tasks))
            
        },
        onTaskDblClick: (id) => {
            console.log(id)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GanttView)