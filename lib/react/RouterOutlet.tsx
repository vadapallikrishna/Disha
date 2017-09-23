import * as React from 'react'
import {Router} from '../router'

declare var router: Router;

class RouterOutlet extends React.Component<any,any>{

    constructor(props: any){
        super(props)
        this.state = {
            currentHref: window.location.pathname
        }
        window.onpopstate = this.updateView.bind(this);
    }

    updateView(ev: any){
        console.log(ev);
        if(this.state.currentHref != window.location.pathname)
            this.setState({currentHref: window.location.pathname})
    }

    render(){
      return <div>
            {React.createElement(router.getCurrentView())}
          </div>
    }
}

export default RouterOutlet;