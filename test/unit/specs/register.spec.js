import register from '@/components/entry/register';
import { mount } from 'avoriaz';
import Vue from 'vue';

describe('register.vue', () => {
    it('adds new item to list on click with avoriaz', () => {
        // build component
        const regComponent = mount(register);

        // set input value
        regComponent.setData({
            username: 'test',
            email: 'test@test.com',
            password: '1234qwer',
            Conpassword: '1234qwer',
        });

        // simulate click event
        const button = regComponent.find('#submitBTN');
        button.dispatch('click');

        // assert list contains new item
        //expect(ListComponent.text()).to.contain('brush my teeth');
        //expect(ListComponent.data().listItems).to.contain('brush my teeth');
    })
})