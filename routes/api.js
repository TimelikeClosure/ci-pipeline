"use strict";

const express = require('express');

const todos = [
    {
        _id: 'c083215a-f0df-d272-b520-19ce40989930',
        createdAt: 1581620538739,
        description: '3ua0dh9wwYcjgQRUCLj5fiDbB1r5XSOsYswVGQ82bDbQvk6UlZKWyCopi4Km',
        completed: false,
    },
    {
        _id: '73bc34a1-35ed-e57e-7548-4049a642dd2a',
        createdAt: 1581620603956,
        description: '9NWoyeOt7F5bBDDI0iEGTc2Zxb5IArx7xXJiMVykZmp29j6caQlFsUE0FxPQ',
        completed: false,
    },
    {
        _id: '75189ad3-174b-412c-c390-e2065ab6ac1d',
        createdAt: 1581620628450,
        description: 'Arxy8QuGstI2RdOdQgvQDEraFJdYzHjO3CrkoFdFyC9X74iWDLM6TE3BZWPC',
        completed: false,
    },
    {
        _id: 'ed3cbae9-756b-2043-edbb-a8c82232e80e',
        createdAt: 1581620676674,
        description: 'IxXkq3T4jqlI3L641YCHahJzEvn4aL54INnh4W9RZvBjihOjlgndY2A65vfi',
        completed: false,
    },
    {
        _id: '4a20fba3-d905-6add-c6f8-94711e59d45b',
        createdAt: 1581620690530,
        description: '2AkChd6qeCZfLdnOogdnEuDh52biRD8hUJhJPKJ8Bzk56lTVRbAj82YACKny',
        completed: false,
    },
    {
        _id: '20afcbbe-0a97-c59e-7c8d-683210f11b78',
        createdAt: 1581620706619,
        description: '1t0R9sEmoikeQetEjyeM9fwOd5O4Jm2aKCTS3zXv3CRWEAFcq06FV1wtw65l',
        completed: false,
    },
    {
        _id: 'c1aa5bb1-2327-9e4d-1d3e-ea41d90d8dd7',
        createdAt: 1581620723794,
        description: 'fMe33YCsLmKEW4D0GVp5hZM48hJN1y5BwiD172eZi5FyXGVJq9X6Ha4gPAHr',
        completed: false,
    },
];

module.exports = ({ db }) => {
    const router = express.Router();

  /* GET todos listing. */
    router.get('/', async (req, res, next) => {
        res.send(todos);
    });

    return router;
};
