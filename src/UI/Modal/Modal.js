import React,{Component} from 'react';
import classes from '../Modal/Modal.css'
import BackDrop from '../../UI/Backdrop/Backdrop'


class Modal extends Component {
    //새로 업데이트된 show가 전에 업데이트된 show와 다를때만 업데이트됨
    //props.loading이 true여도 업데이트됨
    shouldComponentUpdate(nextProps, nextState){
        return nextProps.show !== this.props.show || nextProps.loading === true || nextProps.showDiffAddr === true
    }
    componentDidUpdate(){
        console.log('modal updated')
    }
    render() {
    
        return  (
            <>
                <BackDrop show={this.props.show} canceled={this.props.canceled} ></BackDrop>
                <div className={classes.Modal} 
                style={{
                    transform: this.props.show? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: this.props.show ? '1' : '0'
                }}>
                {this.props.children}</div>
            </>
        )
    }
}
 
  

export default Modal