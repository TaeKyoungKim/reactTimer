import {connect} from "react-redux";
import {bindActionCreators} from 'redux';
import {actionCreators} from "../../reducer";

function mapStateProps(state) {
    const {isPlaying , elapsedTime, timeDuraion} =state;

    return {
        isPlaying,
        elapsedTime,
        timeDuraion
    }
}


function mapDispatchProps(dispatch){
    return{
        setTimer:bindActionCreators(actionCreators.startTimer, dispatch),
        restartTimer:bindActionCreators(actionCreators.restartTimer, dispatch),
        addSecond:bindActionCreators(actionCreators.addSecond, dispatch)
    }
}

export default connect(mapStateProps , mapDispatchProps)(Timer);