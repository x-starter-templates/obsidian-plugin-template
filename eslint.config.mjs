import oxlint from 'eslint-plugin-oxlint';
import prettier from 'eslint-plugin-prettier/recommended';
import { configs as tsConfigs } from 'typescript-eslint';

export default [
	...tsConfigs.recommended,
	prettier,
	...oxlint.configs['flat/recommended'], // oxlint should be the last one
	{
		ignores: ['dist'],
	},
];
