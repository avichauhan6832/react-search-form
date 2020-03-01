import React from 'react';
import Aux from '../../hoc/Auxiliary/Auxiliary';

const formSubmissionResult = (props) => {

    let formResult;

    if(props.formSubmissionResult) {
        formResult = 
            <Aux>
                <p>Your Form is Submitted Properly</p>
            </Aux>
    } else {
        formResult = 
            <Aux>
                <p>There was some error submitting Your form</p>
            </Aux>
    }

    return formResult;
}

export default formSubmissionResult;