import React,{Component} from 'react';
import Toolbar from '../layout/Toolbar/Toolbar';
import classes from './Layout.css'

class Layout extends Component {
    render(){
        return (
            <>
                <Toolbar/>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </>
        )
    }
}

export default Layout