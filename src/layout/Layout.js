import React, { Component } from 'react';
import { connect } from 'react-redux'
import Toolbar from '../layout/Toolbar/Toolbar';
import classes from './Layout.css';
import SideDrawer from '../layout/SideDrawer/SideDrawer'

class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    //sideDrawerToggle버튼을 누르면 sideDrawer가 나타남
    sideDrawerToggleHandler = () => {
        this.setState({ showSideDrawer: true })
    }
    //backDrop을 누르면 sideDrawer가 취소됨
    sideDrawerCancelhandler = () => {
        this.setState({ showSideDrawer: false })
    }

    render() {
        return (
            // <div className={classes.Grid}>
            <>
                <Toolbar sideDrawerToggle={this.sideDrawerToggleHandler} isAuth={this.props.isAuthenticated} userName={this.props.userName}/>
                <SideDrawer
                    show={this.state.showSideDrawer}
                    canceled={this.sideDrawerCancelhandler}
                    isAuth={this.props.isAuthenticated}
                    userName={this.props.userName} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>

            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.auth.token !== null,
        userName: state.auth.userName
    }
}

export default connect(mapStateToProps)(Layout)