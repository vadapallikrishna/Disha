import * as request from 'superagent';
import * as React from 'react';

interface Action{
    name: string,
    handler: (req: request.SuperAgentStatic)=>Object
}

class Store{
    actions: Action[]     
    state: object
    

    perform(actionName: string){
        let action = this.actions.find((a: Action)=> a.name == actionName)
        if (action != undefined){
            Object.assign(this.state,action.handler(request));
            
        }

    }

    register(actionName: string, handler: (req: request.SuperAgentStatic)=> Object){
        this.actions.push({name: actionName,handler: handler})
    }

}


function connectToStore(store: Store,component: any){
    if(component instanceof React.Component){
        setInterval(()=>component.setState(store.state[Object.keys(component.state)[0]]))
    }
}


export {Action, Store, connectToStore}