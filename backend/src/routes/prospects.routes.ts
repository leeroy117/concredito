import { Router } from 'express';

const router = Router();

import { index, store, show, update } from '../controllers/prospect.controller';

router.route('/')
    .get(index)
    .post(store);

router.route('/:prospectId')
    .get(show)
    .put(update);


export default router;