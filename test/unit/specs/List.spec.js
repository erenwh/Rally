import List from '@/components/List';
import Vue from 'vue';

describe('List.vue', () => {

    it('displays items from the list', () => {
        // build component
        const Constructor = Vue.extend(List);
        const ListComponent = new Constructor().$mount();
        // assert that component text contains items from the list
        expect(ListComponent.$el.textContent).to.contain('play games');
    })
})