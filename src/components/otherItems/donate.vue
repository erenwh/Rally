<template>
	<div>
    <v-container id="contain" fluid text-xs-center>
      <v-layout class="mt-3">
        <v-flex xs3></v-flex>
        <v-flex xs6>
          <v-card id="card">
            <v-toolbar dark color="grey darken-4">
              <div class="text-xs-center">
                <v-toolbar-title class="white--text">Donate</v-toolbar-title>
                </div>
            </v-toolbar>
          <v-form class="ma-3 pa-3">
            <v-text-field
              label="Amount"
              required
              raised
              box
              light
              color="amber accent-4"
              v-model="amount"
            ></v-text-field>
            <div v-show="show===false">
              <v-alert
                color="success"
                icon="check_circle"
                value="true"

                >
                Thank you! The payment went through.
              </v-alert>
        		</div>
        		<div v-show="show===true" class="text-xs-center">
        			<PayPal
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
export default {
  data () {
    return {
    	credentials: {
    		sandbox: "AZDxjDScFpQtjWTOUtWKbyN_bDt4OgqaF4eYXlewfBP4-8aqX3PiV8e1GWU6liB2CUXlkA59kJXE7M6R",
    		production: "AbtDPSNtzICNnGM8bUNsubnepnbz6nFD5XX8qeJpGW83XspYaBzK0B8eLFLebQYKOB_CDGg6MHoWBS6C",
 		  },
 		  show: true,
      amount: ''
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
