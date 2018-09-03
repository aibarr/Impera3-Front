let initialState = {
    columns :   [
        {name:"text",       label:"Descripción",  width:"*", tree:true },
        {name:"start_date", label:"Inicio", align:"center" },
        {name:"duration",   label:"Duración",   align:"center" }        
    ],
    layout  :   [
        
    ]

}

const config = (state = initialState, action )  => {
    switch(action.type){
        default:
            return {...state};
    }
}

export default config;