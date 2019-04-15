import { dispatchRoute } from './functions.js';

import Sign from '../controllers/Sign.js';

import Chat from '../controllers/chat.js';

const router  = new Router({
    mode: 'hash'
});


router.add('/',() => dispatchRoute(new Sign(router)));

router.add('/chat',() => dispatchRoute(new Chat(router)));





router.addUriListener();
router.check();

// ===================
