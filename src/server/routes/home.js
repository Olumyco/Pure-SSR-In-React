import express from 'express';
import React from 'react';
import {renderToString} from 'react-dom/server';
import Home from '../../client/pages/Home';

const router = express.Router();

router.get('/', (req, res) => {
    const reactComp = renderToString(<Home />);
    res.render('home', {
        reactApp: reactComp
    });
});

export default router;