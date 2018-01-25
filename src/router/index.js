import signin from '@/components/entry/signin.vue';
import register from '@/components/entry/register.vue';
import accInfo from '@/components/account/accInfo.vue';
import mymeets from '@/components/account/mymeets.vue';
import donate from '@/components/otherItems/donate.vue';
import invite from '@/components/otherItems/invite.vue';
import report from '@/components/otherItems/report.vue';
import create from '@/components/account/create.vue';
import home from '@/components/account/home.vue';

export default [
  { path: '/', component: home },
  { path: '/register', component: register },
  { path: '/signin', component: signin },
  { path: '/accinfo', component: accInfo },
  { path: '/mymeets', component: mymeets },
  { path: '/donate', component: donate },
  { path: '/invite', component: invite },
  { path: '/report', component: report },
  { path: '/create', component: create },

]
