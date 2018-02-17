import Vue from 'vue'
import register from '@/components/entry/register'

describe("register.vue", function() {
    var user = "brad";
    var password = "password";
    var email = "brad@brad.br";
    //inspect raw component
    it('has a created hook', function(){
        expect(typeof register.submit).toBe('function');
    });
    /*it("should create a new user", function(){
        expect(typeof register.submit).toBe('function');
    });*/
});