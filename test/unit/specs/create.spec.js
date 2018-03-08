import create from '@/components/account/create';
import Vue from 'vue';

describe('create.vue', () => {
    it('has an submit function', () => {
        const Constructor = Vue.extend(create);
        const createComponent = new Constructor().$mount();
        assert.typeOf(createComponent.submit, 'function');
    })

    it('has an onPickFile function', () => {
        const Constructor = Vue.extend(create);
        const createComponent = new Constructor().$mount();
        assert.typeOf(createComponent.onPickFile, 'function');
    })
})