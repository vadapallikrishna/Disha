import * as request from 'superagent';  

interface Action{
    name: string,
    handler: (req: request.SuperAgentStatic)=>Object
}


class Store{
    actions: Action[]     
    state: object[]

    perform(actionName: string){
        let action = this.actions.find((a: Action)=> a.name == actionName)
        if (action != undefined)
            this.state.push(Object.assign(this.state[this.state.length-1],action.handler(request)));
    }


}

export {Action, Store}