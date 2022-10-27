import React from 'react';
import Card from 'react-bootstrap/Card';

const Blog = () => {
    return (
        <Card>
            <Card.Header as="h5" className='text-center text-success fs-1'>Technology Blog</Card.Header>
            <Card.Body className='border border-info border-4 m-5'>
                <Card.Title className='bg-info bg-opacity-25 d-inline p-2 m-3 fs-3'>Queries Section:</Card.Title>
                <Card.Text className='p-2 m-3'>
                    <strong>Q1. what is cors?</strong>
                </Card.Text>
                <Card.Text className='p-2 m-3'>
                    <strong>Ans.</strong> Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.
                </Card.Text>
                <Card.Text className='p-2 m-3'>
                    <strong>Q2. Why are you using firebase? What other options do you have to implement authentication?</strong>
                </Card.Text>
                <Card.Text className='p-2 m-3'>
                    <strong>Ans.</strong> The Firebase Realtime Database lets you build rich, collaborative applications by allowing secure access to the database directly from client-side code. Data is persisted locally, and even while offline, realtime events continue to fire, giving the end user a responsive experience. <br />
                    User authentication is a powerful way to provide rightful access to your digital properties like your website or application. And it obviously adds to the security and a customized user experience.
                    Many other firebase alternatives are given bellow:- <br />
                    <br />
                    <p>1. Supabase
                        2. Okta
                        3. PingIdentity
                        4. Keycloak
                        5. Frontegg
                        6. Authress</p>


                </Card.Text>
                <Card.Text className='p-2 m-3'>
                    <strong>Q3. How does the private route work?</strong>
                </Card.Text>
                <Card.Text className='p-2 m-3'>
                    <strong>Ans.</strong> Private Routes in React Router (also called Protected Routes) require a user being authorized to visit a route (read: page). So if a user is not authorized for a specific page, they cannot access it. The most common example is authentication in a React application where a user can only access the protected pages when they are authorized (which means in this case being authenticated). Authorization goes beyond authentication though. For example, a user can also have roles and permissions which give a user access to specific areas of the application.
                </Card.Text>
                <Card.Text className='p-2 m-3'>
                    <strong>Q4. What is Node? How does Node work?</strong>
                </Card.Text>
                <Card.Text className='p-2 m-3'>
                    <strong>Ans.</strong> This is in contrast to today's more common concurrency model, in which OS threads are employed. Thread-based networking is relatively inefficient and very difficult to use. Furthermore, users of Node.js are free from worries of dead-locking the process, since there are no locks. Almost no function in Node.js directly performs I/O, so the process never blocks except when the I/O is performed using synchronous methods of Node.js standard library. Because nothing blocks, scalable systems are very reasonable to develop in Node.js. <br />
                    Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request.
                </Card.Text>

            </Card.Body>
        </Card>
    );
};

export default Blog;