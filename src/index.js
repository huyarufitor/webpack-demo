import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import ElementPlus from "element-plus";
import locale from "element-plus/lib/locale/lang/zh-cn"; //中文
import 'element-plus/dist/index.css'; // 引入样式文件
createApp(App)
.use(router)
.use(ElementPlus)
.mount('#root');
