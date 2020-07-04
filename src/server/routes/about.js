import express from 'express';
import React from 'react';
import {renderToString} from 'react-dom/server';
import About from '../../client/pages/About';

const router = express.Router();

router.get('/', (req, res) => {
    const reactComp = renderToString(<About />);
    res.render('about', {
        reactApp: reactComp
    });
});

export default router;