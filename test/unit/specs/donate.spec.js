import donate from '@/components/otherItems/donate';
import Vue from 'vue';

describe('donate.vue', () => {

    it('has a changeBool function', () => {
        const Constructor = Vue.extend(donate);
        const donateComponent = new Constructor().$mount();
        assert.typeOf(donateComponent.changeBool, 'function');

    })

})
