import report from '@/components/otherItems/report';
import Vue from 'vue';

describe('report.vue', () => {

    it('has a change submit function', () => {
        const Constructor = Vue.extend(report);
        const reportComponent = new Constructor().$mount();
        assert.typeOf(reportComponent.submit, 'function');
    })
  
    it('tests form input and report button click', () => {
        const Constructor = Vue.extend(report);
        const reportComponent = new Constructor({
            /*data() {
                name: 'rush';
                email: 'rush@rush.ru';
            }*/
        }).$mount();
        //insert information
        reportComponent.name = 'rush';
        reportComponent.email = 'rush@rush.ru';
        
        // simulate click event
        const button = reportComponent.$el.querySelectorAll('button')[0];
        const clickEvent = new window.Event('click');
        button.dispatchEvent(clickEvent);
        reportComponent._watcher.run();
        expect(reportComponent.name).to.contain('rush');
        expect(reportComponent.email).to.contain('rush@rush.ru');
    })
})