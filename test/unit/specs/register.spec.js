import register from '@/components/entry/register';
import Vue from 'vue';

describe('register.vue', () => {

    it('has a submit function', () => {
        const Constructor = Vue.extend(register);
        const registerComponent = new Constructor().$mount();
        assert.typeOf(registerComponent.submit, 'function');
    })

    it('has a Facebook submit function', () => {
        const Constructor = Vue.extend(register);
        const registerComponent = new Constructor().$mount();
        assert.typeOf(registerComponent.fb, 'function');
    })

    it('has a Twitter submit function', () => {
        const Constructor = Vue.extend(register);
        const registerComponent = new Constructor().$mount();
        assert.typeOf(registerComponent.twitter, 'function');
    })

    it('has a Google submit function', () => {
        const Constructor = Vue.extend(register);
        const registerComponent = new Constructor().$mount();
        assert.typeOf(registerComponent.google, 'function');
    })
  
})