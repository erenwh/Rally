import donate from '@/components/otherItems/donate';
import Vue from 'vue';

describe('donate.vue', () => {

    it('has a change boolean function', () => {
        const Constructor = Vue.extend(donate);
        const donateComponent = new Constructor().$mount();
        assert.typeOf(donateComponent.changeBool, 'function');
    })

    /*it('has a paypal component', () => {
        const Constructor = Vue.extend(donate);
        const donateComponent = new Constructor().$mount();
        assert.typeOf(donateComponent.paypal, 'component');
    })*/
  
    //tests form input [<--only this for now] and paypal button click
//    it('tests form input', () => {
//        const Constructor = Vue.extend(donate);
//        const donateComponent = new Constructor({
            /*data() {
                amount: '123';
            }*/
//        }).$mount();
        //insert information
//        donateComponent.amount = '123';
        
        // simulate click event
        //const button = donateComponent.$el.querySelector('button');
        //const clickEvent = new window.Event('click');
        //button.dispatchEvent(clickEvent);
        //donateComponent._watcher.run();
//        expect(donateComponent.amount).to.contain('123');
//    })
})