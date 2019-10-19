// export default{
// 	install(Vue,options){
// 		//保存全局变量接口网址用于测试
// 		Vue.prototype.apiUrl = 'http://162.168.2.102:8080/testSSM'
// 	}
// }

//设置全局变量
global.baseURI = 'http://162.168.2.102:8080/testSSM'
global.baseURI2 = 'http://192.168.0.103:8081/springboot'