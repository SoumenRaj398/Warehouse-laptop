import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div style={{heigtht:'500px'}}className='w-100 d-flex justify-content-center align-items-center'>
            <Spinner animation="grow" variant="danger" />
            
        </div>
    );
};

export default Loading;