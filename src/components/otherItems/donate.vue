<template>
	<div id="donate">
    <v-container id="contain" fluid text-xs-center>
      <v-layout class="mt-3">
        <v-flex xs3></v-flex>
        <v-flex xs6>
					<h1 v-if="!signin" class="mb-3">Please Log in first!!</h1>
          <v-card id="card" v-if="signin">
            <v-toolbar dark color="grey darken-4">
              <div class="text-xs-center">
                <v-toolbar-title class="white--text">Donate</v-toolbar-title>
                </div>
            </v-toolbar>
          <v-form class="ma-3 pa-3" id="info">
            <v-text-field
							name="amount"
              label="Amount"
							:rules="amountRules"
              required
              raised
              box
              light
              color="amber accent-4"
              v-model="amount"
            ></v-text-field>
            <div v-show="!show">
              <v-alert
                color="success"
                icon="check_circle"
                value="true"

                >
                Thank you! The payment went through.
              </v-alert>
        		</div>
        		<div v-show="show" class="text-xs-center">
        			<PayPal
								id="paypal"
        				:amount="amount"
        				currency="USD"
        				:client='credentials'
								env="sandbox"
        				v-on:paypal-paymentCompleted="changeBool($event)"
        				></PayPal>
        		</div>
          </v-form>
        </v-card>
        </v-flex>
        <v-flex xs3></v-flex>
      </v-layout>
    </v-container>
	</div>
</template>

<script>
import PayPal from 'vue-paypal-checkout'
import * as firebase from 'firebase'
export default {
  data () {
    return {
    	credentials: {
    		sandbox: "AZDxjDScFpQtjWTOUtWKbyN_bDt4OgqaF4eYXlewfBP4-8aqX3PiV8e1GWU6liB2CUXlkA59kJXE7M6R",
    		production: "AbtDPSNtzICNnGM8bUNsubnepnbz6nFD5XX8qeJpGW83XspYaBzK0B8eLFLebQYKOB_CDGg6MHoWBS6C",
 		  },
 		  show: true,
      amount: '',
			amountRules: [
			/*(v) => !!v || 'Amount is required',
			(v) => /^[0-9]*$/.test(v) && v.length <= 100 || 'Please enter numbers'*/
			],
			signin: false
    }
  },
  methods: {
  	changeBool($event) {
  		console.log($event);
  		if (this.show == true) {
              this.show = false;
            }
            else {
              this.show = true;
            }
  	}
  },
  components: {
  	PayPal
  },
	mounted() {
		try {
			var email = firebase.auth().currentUser.email;
			this.signin = true;
		}

		catch (error) {
			this.signin = false;
		}
		console.log(email);
	}
}
</script>

<style scoped>
#card {
  -webkit-box-shadow: 0px 3px 15px 1px rgba(92,92,92,1);
  -moz-box-shadow: 0px 3px 15px 1px rgba(92,92,92,1);
  box-shadow: 0px 3px 15px 1px rgba(92,92,92,1);
}

</style>
