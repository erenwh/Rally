import report from '@/components/otherItems/report';
import Vue from 'vue';

describe('report.vue', () => {

    it('has a submit function', () => {
        const Constructor = Vue.extend(report);
        const reportComponent = new Constructor().$mount();
        assert.typeOf(reportComponent.submit, 'function');
    })

})
