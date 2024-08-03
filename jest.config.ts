import { createDefaultPreset, type JestConfigWithTsJest } from 'ts-jest'

const jestConfig: JestConfigWithTsJest = {
	globals: {},
	moduleFileExtensions: ['ts', 'js'],
	transform: {
		...createDefaultPreset().transform,
	},
	testMatch: ['**/test/**/*.test.(ts|js)'],
	testEnvironment: 'node',
}

export default jestConfig
