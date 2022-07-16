import React from "react"
import {useHistory} from "react-router-dom"
const NotFound = (props) => {
    const history = useHistory();
    return(
        <>
        <h1>없다 !!!!</h1>
        <button onClick={() => {
            history.goBack()
        }}>뒤로가기</button>
        </>
    )
}

export default NotFound