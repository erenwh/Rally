import invite from '@/components/otherItems/invite';
import Vue from 'vue';

describe('invite.vue', () => {

    it('has a submit function', () => {
        const Constructor = Vue.extend(invite);
        const inviteComponent = new Constructor().$mount();
        assert.typeOf(inviteComponent.submit, 'function');
    })

})
