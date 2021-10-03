import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <h1>The Page you Are Looking For Does Not Exist</h1>

            <Link to ="/home"><Button className="btn btn-warning text-white p-2 fs-5 rounded-3">Back To Home </Button></Link>
        </div>
    );
};

export default NotFound;