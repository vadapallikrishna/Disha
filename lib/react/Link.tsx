import * as React from 'react';
import {Router} from '../router';

declare var router: Router;


class Link extends React.Component<any,any>{
    
    pushUrl(){
      router.goto("",this.props.href)
    }
    
    render(){
       return <button className={this.props.className} type="button" onClick={this.pushUrl.bind(this)}>{this.props.children}</button>
    }
}

export default Link;