
let vid = 0;

export function initMixin(Vue){
    Vue.prototype._init = function(options){
        const vm = this; 
        vm.vid = vid++;
        vm._isVue = true;

        // 初始化数据data

        // 初始化created方法

        // 初始化mathod

        // 初始化computed

        // 初始化el并挂载
    }
}