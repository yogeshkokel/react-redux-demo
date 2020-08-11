import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUser } from '../store/users/userActions';
import { Card, ListGroup, Spinner, Alert } from 'react-bootstrap';

function AsyncConatiner() {
    const users = useSelector(state => state.user);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchUser());
    }, [])
    return (
        <div>
            <h1> Async Function </h1>
            Navigate to components/AsyncConatiner.js
            <br />
            {
                users.loading ?
                    <Spinner animation="border" role="status">
                        <span className="sr-only">Loading...</span>
                    </Spinner> :
                    users.error ?
                        <Alert variant="danger">
                            {users.error}
                        </Alert>
                        : <Card>
                            <ListGroup variant="flush">
                                {users.data.map((user, index) => (
                                    <ListGroup.Item key={index}>{user.name}</ListGroup.Item>
                                ))}
                            </ListGroup>
                        </Card>
            }
        </div>
    );
}

export default AsyncConatiner;