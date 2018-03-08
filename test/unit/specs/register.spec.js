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
  
    it('tests form input and submit button click', () => {
        const Constructor = Vue.extend(register);
        const registerComponent = new Constructor({
            /*data() {
                username: 'john';
                email: 'john@john.com';
                password: 'johnjohn';
                Conpassword: 'johnjohn';
            }*/
        }).$mount();
        //insert information
        registerComponent.username = 'john';
        registerComponent.dob = '12/12/12';
        registerComponent.email = 'john@john.com';
        registerComponent.password = 'johnjohn';
        registerComponent.Conpassword = 'johnjohn';
        
        //expect(registerComponent.$el.textContent).to.contain('john');
        //expect(registerComponent.$el.textContent).to.contain('john@john.com');
        
        // simulate click event
        // buttons: 1st facebook, 2nd google, 3rd twitter, 4th submit
        const button = registerComponent.$el.querySelectorAll('button')[3];
        const clickEvent = new window.Event('click');
        button.dispatchEvent(clickEvent);
        registerComponent._watcher.run();
        expect(registerComponent.username).to.contain('john');
        expect(registerComponent.dob).to.contain('12/12/12');
        expect(registerComponent.email).to.contain('john@john.com');
        expect(registerComponent.password).to.contain('johnjohn');
        expect(registerComponent.Conpassword).to.contain('johnjohn');
    })
})