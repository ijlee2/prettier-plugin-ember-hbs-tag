import { convertFixtureToJson } from '@codemod-utils/tests';

const inputProject = convertFixtureToJson('index/my-app-ideal/input');
const outputProject = convertFixtureToJson('index/my-app-ideal/output');

export { inputProject, outputProject };
