import { useReducer } from "react";
import AlertsContext from "./alertsContext";
import AlertReducer from './alertsReducer';
import {SET_ALERT, REMOVE_ALERT} from '../types';



const AlertsState = (props) => {

    const initialState = null;
    const [state,dispath] = useReducer(AlertReducer,initialState)

    const setAlert = (message,type) =>{
        dispath({
            type:SET_ALERT,
            payload: {
            message,
            type
        }
        })
        setTimeout(()=>dispath({type: REMOVE_ALERT}),5000)
    }
  return (
    <AlertsContext.Provider
        value={{
            alert: state,
            setAlert
        }}
    >
        {props.children}
      
    </AlertsContext.Provider>
  )
}

export default AlertsState
