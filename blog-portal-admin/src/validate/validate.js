import Vue from 'vue';
import VeeValidate, {
	Validator
} from 'vee-validate';
import zh from 'vee-validate/dist/locale/zh_CN';

// 配置中文
Validator.addLocale(zh);

const config = {
	errorBagName: 'errors', // change if property conflicts.
	fieldsBagName: 'veeFields',
	delay: 0,
	locale: 'zh_CN',
	strict: true,
	enableAutoClasses: false,
	classNames: {
		touched: 'touched', // the control has been blurred
		untouched: 'untouched', // the control hasn't been blurred
		valid: 'valid', // model is valid
		invalid: 'invalid', // model is invalid
		pristine: 'pristine', // control has not been interacted with
		dirty: 'dirty' // control has been interacted with
	},
	events: 'blur',
	inject: true
}

Vue.use(VeeValidate, config);

// 自定义 validate
const dictionary = {
	zh_CN: {
		messages: {
			email: () => '请输入正确的邮箱格式',
			required: (field) => "请输入" + field
		},
		attributes: {
			email: '邮箱',
			password: '密码',
			name: '账号',
			phone: '手机',
			loginUserAccount: '账号',
			loginUserPassword:'密码'
		}
	}
}

Validator.updateDictionary(dictionary);

Validator.extend('phone', {
	messages: {
		zh_CN: field => field + '必须是11位手机号码',
	},
	validate: value => {
		return value.length == 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/.test(value)
	}
})

Validator.extend('loginUserAccount',{
	messages:{
		zh_CN:field => "请输入正确的手机号或邮箱",
	},
	validate:value => {
		return (value.length == 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/.test(value)) || /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/.test(value);
	}
})
