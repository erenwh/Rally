import signin from '@/components/entry/signin';
import Vue from 'vue';

describe('signin.vue', () => {

    it('has a submit function', () => {
        const Constructor = Vue.extend(signin);
        const signinComponent = new Constructor().$mount();
        assert.typeOf(signinComponent.submit, 'function');
    })

    it('has a Facebook submit function', () => {
        const Constructor = Vue.extend(signin);
        const signinComponent = new Constructor().$mount();
        assert.typeOf(signinComponent.fb, 'function');
    })

    it('has a Twitter submit function', () => {
        const Constructor = Vue.extend(signin);
        const signinComponent = new Constructor().$mount();
        assert.typeOf(signinComponent.twitter, 'function');
    })

    it('has a Google submit function', () => {
        const Constructor = Vue.extend(signin);
        const signinComponent = new Constructor().$mount();
        assert.typeOf(signinComponent.google, 'function');
    })

    it('has a forgot password function', () => {
        const Constructor = Vue.extend(signin);
        const signinComponent = new Constructor().$mount();
        assert.typeOf(signinComponent.forgot, 'function');
    })
  
})