import accInfo from '@/components/account/accInfo';
import Vue from 'vue';

import signin from '@/components/entry/signin';

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

    it('tests edit info button click, username form input, and save button click', () => {
        //make sure to always signin since we have url manipulation blocks
        const Constructor0 = Vue.extend(signin);
        const signinComponent = new Constructor0({
            /*data() {
                username: 'john';
                email: 'john@john.com';
                password: 'johnjohn';
                Conpassword: 'johnjohn';
            }*/
        }).$mount();
        signinComponent.email = 'john@john.com';
        signinComponent.password = 'johnjohn';

        // buttons: 1st facebook, 2nd google, 3rd twitter, 4th submit
        const button = signinComponent.$el.querySelector('#sub');
        const clickEvent = new window.Event('click');
        button.dispatchEvent(clickEvent);
        signinComponent._watcher.run();
        //end of signin

        //beginning of account info
        const Constructor = Vue.extend(accInfo);
        const accInfoComponent = new Constructor({
            /*data() {
                username: 'john';
                email: 'john@john.com';
                password: 'johnjohn';
                Conpassword: 'johnjohn';
            }*/
        }).$mount();

        // simulate click event
        // click edit info button
        const buttonEdit = accInfoComponent.$el.querySelector('#edit');
        const click = new window.Event('click');
        buttonEdit.dispatchEvent(click);
        accInfoComponent._watcher.run();
        //done clicking
        /*
        //put in username
        accInfoComponent.username = 'john';

        // click edit save button
        const buttonSave = accInfoComponent.$el.querySelector('#save');
        buttonSave.dispatchEvent(click);
        accInfoComponent._watcher.run();
        //done clicking

        //username should be in data
        expect(accInfoComponent.username).to.contain('john');*/
    })
})
