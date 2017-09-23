

interface Route{
    path: string,
    component: any
}

class Router{
    history: History
    routes: Route[]

    constructor(){
        this.history = window.history
        this.routes = [];
    }

    goto(title: string, path: string){
        history.pushState({},title,path);

    }

    register(path: string,component: any){
        this.routes.push({path:path,component:component})
    }

    getCurrentView(){
       let route = this.routes.find((route: Route) => route.path == document.location.pathname)
       if( route != undefined )
            return route.component
       else
            throw new Error("No handler found");
    }
}

export {Route, Router};
     