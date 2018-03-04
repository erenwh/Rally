import signin from '@/components/entry/signin.vue';
import register from '@/components/entry/register.vue';
import accInfo from '@/components/account/accInfo.vue';
import registerMeet from '@/components/account/registerMeet.vue';
import donate from '@/components/otherItems/donate.vue';
import invite from '@/components/otherItems/invite.vue';
import report from '@/components/otherItems/report.vue';
import create from '@/components/account/create.vue';
import home from '@/components/account/home.vue';
import orgmeets from '@/components/account/orgMeets.vue';
import viewMeet from '@/components/meet/viewMeet.vue';

export default [
  { path: '/', component: home },
  { path: '/register', component: register },
  { path: '/signin', component: signin },
  { path: '/accinfo', component: accInfo },
  { path: '/meets', component: registerMeet },
  { path: '/donate', component: donate },
  { path: '/invite', component: invite },
  { path: '/report', component: report },
  { path: '/create', component: create },
  { path: '/orgmeets', component: orgmeets },
  { path: '/viewmeet/:id', component: viewMeet }

]
