import { createRouter, createWebHashHistory } from 'vue-router';
import Home from './pages/Home.vue';
import Workflow from './pages/Workflow.vue';
import WorkflowEdit from './pages/workflow/Edit.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/workflow/:id',
    name: 'workflow',
    component: Workflow,
  },
  {
    path: '/workflow/:id/edit',
    name: 'workflow-edit',
    component: WorkflowEdit,
  },
];

export default createRouter({
  routes,
  history: createWebHashHistory(),
});