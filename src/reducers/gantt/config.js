let initialState = {
    columns :   [
        {name:"text",       label:"Descripción",  width:"*", tree:true },
        {name:"start_date", label:"Inicio", align:"center" },
        {name:"duration",   label:"Duración",   align:"center" }        
    ],
    layout  :   {
        css: "gantt_container",
        rows:[
            {
            cols: [
                {
                // the default grid view  
                view: "grid",  
                scrollX:"scrollHor", 
                scrollY:"scrollVer"
                },
                { resizer: true, width: 1 },
                {
                // the default timeline view
                view: "timeline", 
                scrollX:"scrollHor", 
                scrollY:"scrollVer"
                },
                {
                view: "scrollbar", 
                id:"scrollVer"
                }
            ]},
            {
                view: "scrollbar", 
                id:"scrollHor"
            }
        ]
    }
}

const config = (state = initialState, action )  => {
    switch(action.type){
        default:
            return {...state};
    }
}

export default config;