/*global gantt*/
import React, { Component } from 'react';
import 'dhtmlx-gantt';
import 'dhtmlx-gantt/codebase/dhtmlxgantt.css';

class Gantt extends Component {

    componentDidMount() {
        this.initGanttEvents();
        gantt.init(this.ganttContainer);
        if(this.props.tasks){
            gantt.parse(this.props.tasks);
        }
        
    }

    componentDidUpdate(){
        gantt.render();
        }
        
        componentWillReceiveProps(nextProps){
            if (this.props.tasks !== nextProps.tasks){
                console.log(nextProps.tasks)
                gantt.parse(nextProps.tasks);
                gantt.render();
            }
        }

    


    render() {
        return (
            <div
                ref={(input) => { this.ganttContainer = input }}
                style={{width: '100%', height: '100%'}}
            >
            </div>
        );
    }

    initGanttEvents() {
        if(gantt.ganttEventsInitialized){
          return;
        }
        gantt.ganttEventsInitialized = true;
    
        gantt.attachEvent('onAfterTaskAdd', (id, task) => {
          if(this.props.onTaskUpdated) {
            this.props.onTaskUpdated(id, 'inserted', task);
          }
        });
    
        gantt.attachEvent('onAfterTaskUpdate', (id, task) => {
          if(this.props.onTaskUpdated) {
            this.props.onTaskUpdated(id, 'updated', task);
          }
        });
    
        gantt.attachEvent('onAfterTaskDelete', (id) => {
          if(this.props.onTaskUpdated) {
            this.props.onTaskUpdated(id, 'deleted');
          }
        });
    
        gantt.attachEvent('onAfterLinkAdd', (id, link) => {
          if(this.props.onLinkUpdated) {
            this.props.onLinkUpdated(id, 'inserted', link);
          }
        });
    
        gantt.attachEvent('onAfterLinkUpdate', (id, link) => {
          if(this.props.onLinkUpdated) {
            this.props.onLinkUpdated(id, 'updated', link);
          }
        });
    
        gantt.attachEvent('onAfterLinkDelete', (id, link) => {
          if(this.props.onLinkUpdated) {
            this.props.onLinkUpdated(id, 'deleted');
          }
        });

        gantt.attachEvent("onTaskDblClick", function(id,e){
            console.log(id)
            console.log(e)
            if(this.props.onTaskDblClick) {
                this.props.onTaskDblClick(id);
            }
            
        });
      }

    
}

export default Gantt;