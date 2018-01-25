import hello from '@/components/hello.vue';
import signin from '@/components/entry/signin.vue';
import register from '@/components/entry/register.vue';
import accInfo from '@/components/account/accInfo.vue';
import mymeets from '@/components/account/mymeets.vue';

export default [
  { path: '/', component: hello },
  { path: '/register', component: register },
  { path: '/signin', component: signin },
  { path: '/accinfo', component: accInfo },
  { path: '/mymeets', component: mymeets }
  
]
