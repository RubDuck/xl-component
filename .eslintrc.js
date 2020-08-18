module.exports = {
		root: true,
		parserOptions: {
			parser: 'babel-eslint'
		},
    env: {
      browser: true,
      es2020: true
    },
    extends: [
			'plugin:vue/essential', 
			'standard'
		],
		plugins : [
			"vue"
		],
    parserOptions: {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 11,
        "sourceType": "module"
    },
    rules: {
			'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
			'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
			"linebreak-style": [0,"error", "windows"],
			'max-len' : ["error", {code : 10000}],
			"semi": ["error", "always"],
			"quotes": ["error", "double"],
    }
};
