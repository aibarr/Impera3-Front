import _ from 'lodash'

let initialState = [{
    id: '1',
    name: 'test',
    tasks: [{
            id: 1,
            text: 'Task #1',
            start_date: '15-04-2017',
            duration: 3,
            progress: 0.6
        },
        {
            id: 2,
            text: 'Task #2',
            start_date: '18-04-2017',
            duration: 3,
            progress: 0.4
        }

    ],
    links: [

    ],
    constrains: [

    ],
    baselines: [

    ]

}, ]


const project = (state = initialState, action) => {
    switch (action.type) {

        case 'SET_BL':
            return state.map(project => (project.id === action.projectID) ? { ...project,
                baselines: [
                    ...project.baselines,
                    {
                        id: '1',
                        tasks: action.tasks.map((id) => {                            
                            return _.find(project.tasks, (task) => {
                                console.log(task.id==id)
                                return task.id == id 
                            })
                        })
                    }
                ]
            } : project)
        case 'UNSET_BL':
            break;
        default:
            return state;
    }
}

export default project;