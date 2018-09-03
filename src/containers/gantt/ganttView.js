import React, { Component } from 'react';
import { connect } from 'react-redux';
import Gantt from '../../components/gantt/gantt'
import './ganttView.css'

class GanttView extends Component {
    componentDidMount(){
        console.log(this.props.data)
    }

    render () {
        return (
            <div>
                <div className='gantt-container'>
                    <Gantt
                        tasks = {this.props.data}
                        config = {this.props.config}
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
        zoomIn  :   '',
        zoomOut :   '',
        doNewTaks   :   '',
        doNewLink   :   '',
        editTask    :   '',
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GanttView)