import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import('@/components/home/Home')
const Web = () => import('@/components/web/Web')
const Html = () => import('@/components/html/Html')
const Css = () => import('@/components/css/Css')
const JavaScript = () => import('@/components/javascript/JavaScript')
const Information = () => import('@/components/information/Information')
const Chaos = () => import('@/components/chaos/Chaos')
const Article = () => import('@/components/article/Article')
const SearchArticle = () => import('@/components/search_article/SearchArticle')
const Login = () => import('@/components/login/Login')
const Index = () => import('@/components/index/Index')
Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', name: 'home', component: Home},
    {path: '/web', name: 'web', component: Web},
    {path: '/html', name: 'html', component: Html},
    {path: '/searchArticle', name: 'searchArticle', component: SearchArticle},
    {path: '/css', name: 'css', component: Css},
    {path: '/javascript', name: 'javascript', component: JavaScript},
    {path: '/information', name: 'information', component: Information},
    {path: '/chaos', name: 'chaos', component: Chaos},
    {path: '/article', name: 'article', component: Article},
    {path: '/backstage/login', name: 'login', component: Login},
    {path: '/backstage/index', name: 'index', component: Index},
    {path: "*", redirect: "/"}
  ],
  mode: "history"
})
