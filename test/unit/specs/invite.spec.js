import invite from '@/components/otherItems/invite';
import Vue from 'vue';

describe('invite.vue', () => {

    it('has a submit function', () => {
        const Constructor = Vue.extend(invite);
        const inviteComponent = new Constructor().$mount();
        assert.typeOf(inviteComponent.submit, 'function');
    })
  
    //tests form input and invite button click
//    it('tests form input', () => {
//        const Constructor = Vue.extend(invite);
//        const inviteComponent = new Constructor({
            /*data() {
                email: 'turkey@gmail.com';
            }*/
//        }).$mount();
        //insert information
//        inviteComponent.email = 'asdf@asdf.asd';
        
        // simulate click event
        //const button = inviteComponent.$el.querySelectorAll('button')[0];
        //const clickEvent = new window.Event('click');
        //button.dispatchEvent(clickEvent);
        //inviteComponent._watcher.run();
//        expect(inviteComponent.email).to.contain('asdf@asdf.asd');
//    })
})
