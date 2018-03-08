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
  
    it('tests form input and submit button click', () => {
        const Constructor = Vue.extend(signin);
        const signinComponent = new Constructor({
            /*data() {
                username: 'john';
                email: 'john@john.com';
                password: 'johnjohn';
                Conpassword: 'johnjohn';
            }*/
        }).$mount();
        //insert information
        //signinComponent.username = 'john';
        signinComponent.email = 'john@john.com';
        signinComponent.password = 'johnjohn';
        //signinComponent.Conpassword = 'johnjohn';
        
        //expect(signinComponent.$el.textContent).to.contain('john');
        //expect(signinComponent.$el.textContent).to.contain('john@john.com');
        
        // simulate click event
        // buttons: 1st facebook, 2nd google, 3rd twitter, 4th submit
        const button = signinComponent.$el.querySelectorAll('button')[3];
        const clickEvent = new window.Event('click');
        button.dispatchEvent(clickEvent);
        signinComponent._watcher.run();
        expect(signinComponent.email).to.contain('john@john.com');
        expect(signinComponent.password).to.contain('johnjohn');
    })
})