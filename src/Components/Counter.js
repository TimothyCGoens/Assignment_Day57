import React, {Component} from 'react';
import { connect } from 'react-redux'

class Counter extends Component {

    render() {

        return(
            <div>
                <h2>{this.props.ctr}</h2>
                <button onClick={() => this.props.onAddOneCounter()}>+1</button>
                <button onClick={() => this.props.onSubOneCounter()}>-1</button>
                <button onClick={() => this.props.onAddTenCounter()}>+10</button>
                <button onClick={() => this.props.onSubTenCounter()}>-10</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        ctr: state.counter
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onAddOneCounter: () => dispatch({type: 'ADD_ONE'}),
        onSubOneCounter: () => dispatch({type: 'SUB_ONE'}),
        onAddTenCounter: () => dispatch({type: 'ADD_TEN', value: 10}),
        onSubTenCounter: () => dispatch({type: 'SUB_TEN', value: 10})
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Counter)