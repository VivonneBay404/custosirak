import React, { Component } from 'react';
import classes from './DosirakBuilder.css';
import BuildControls from './BuildControls/BuildControls'

class DosirakBuilder extends Component {
   

    state = {
        banchan1 : {
            jeyuk : 0,
            bulgogi : 0
          },
          banchan2 : {
            friedOdeng : 0,
            friedOubergine : 0
          },
          banchan3 : {
            kimchi : 0,
            friedKimchi : 0
          },
          rice : {
            white : 0,
            multiGrain : 0
          },
          soup : {
            seaweed : 0,
            dwanjang :0
          }
        }
    

    render() {
        return (
            <div className={classes.DosirakBuilder}>
                <h1>DosirakBuilder Display</h1>
                <BuildControls />
            </div>

        )
    }

}
export default DosirakBuilder;