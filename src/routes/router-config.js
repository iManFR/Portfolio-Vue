import Home from '../components/Home/Home.vue'
import Work from '../components/Work/Work.vue'
import About from '../components/About/About.vue'


export const routes = [
	{
		path: '/',
		component: Home,
		name: 'home'
	},
	{
		path: '/work',
		name: 'work',
		component: Work,
	},
	{
		path: '/about',
		name: 'about',
		component: About,
	},
]
