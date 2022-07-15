import {createApp} from 'vue';
import Vuex from 'vuex';

import { alert } from './alert.module';
import { authentication } from './authentication.module';
import { users } from './users.module';

const app = createApp();
app.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        alert,
        authentication,
        users
    }
});