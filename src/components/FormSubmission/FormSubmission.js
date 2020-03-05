import React from 'react';
import Aux from '../../hoc/Auxiliary/Auxiliary';

const formSubmissionResult = (props) => {

    let formResult;

    if(props.searchModel) {
        formResult = 
            <Aux>
                <p>User data is not found</p>
            </Aux>
        return formResult;
    }

    if(props.formSubmissionResult) {
        formResult = 
            <Aux>
                <p>Your Form is Submitted Properly</p>
            </Aux>
    } else {
        formResult = 
            <Aux>
                <p>There was some error submitting Your form</p>
                <p>Try with different email or mobile no</p>
            </Aux>
    }

    return formResult;
}

export default formSubmissionResult;