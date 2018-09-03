let initialState = {
    projects: [
        {
            id  : '',
            name    :   '',
            tasks   :   [

            ],
            constrains  :   [
                {
                    id  :   '',
                    name    :   '',
                    commited    :   '',
                    requiered   :   ''
                }
            ]
        }
    ]
}

const projects = (state = initialState, action) => {
    switch (action.type){
        default:
            return state;
    }
}