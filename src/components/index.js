//公用组件
import Vue from 'vue';
const components=require.context('@/components',true,/\.vue$/)
components.keys().forEach(com => {
     const component_config=components(com);
     let component=com.split('/')[1];
     Vue.component(component,component_config.default || component_config)
});