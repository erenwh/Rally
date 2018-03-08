import accInfo from '@/components/account/accInfo';
import Vue from 'vue';

describe('accInfo.vue', () => {

    it('has an editing function', () => {
        const Constructor = Vue.extend(accInfo);
        const accInfoComponent = new Constructor().$mount();
        assert.typeOf(accInfoComponent.editing, 'function');
    })

    it('has a save function', () => {
        const Constructor = Vue.extend(accInfo);
        const accInfoComponent = new Constructor().$mount();
        assert.typeOf(accInfoComponent.save, 'function');
    })

    it('has a cancel function', () => {
        const Constructor = Vue.extend(accInfo);
        const accInfoComponent = new Constructor().$mount();
        assert.typeOf(accInfoComponent.cancel, 'function');
    })

    it('has a delete account function', () => {
        const Constructor = Vue.extend(accInfo);
        const accInfoComponent = new Constructor().$mount();
        assert.typeOf(accInfoComponent.deleteacc, 'function');
    })

    it('has user event functions onPickFile() and onFilePicked()', () => {
        const Constructor = Vue.extend(accInfo);
        const accInfoComponent = new Constructor().$mount();
        assert.typeOf(accInfoComponent.onPickFile, 'function');
        assert.typeOf(accInfoComponent.onFilePicked, 'function');
    })
  
    it('tests form input and submit button click', () => {
        const Constructor = Vue.extend(accInfo);
        const accInfoComponent = new Constructor({
            /*data() {
                username: 'john';
                email: 'john@john.com';
                password: 'johnjohn';
                Conpassword: 'johnjohn';
            }*/
        }).$mount();
        //insert information
        //accInfoComponent.username = 'john';
        accInfoComponent.email = 'john@john.com';
        accInfoComponent.password = 'johnjohn';
        //accInfoComponent.Conpassword = 'johnjohn';
        
        //expect(accInfoComponent.$el.textContent).to.contain('john');
        //expect(accInfoComponent.$el.textContent).to.contain('john@john.com');
        
        // simulate click event
        // buttons: 1st facebook, 2nd google, 3rd twitter, 4th submit
        const button = accInfoComponent.$el.querySelectorAll('button')[3];
        const clickEvent = new window.Event('click');
        button.dispatchEvent(clickEvent);
        accInfoComponent._watcher.run();
        expect(accInfoComponent.email).to.contain('john@john.com');
        expect(accInfoComponent.password).to.contain('johnjohn');
    })
})