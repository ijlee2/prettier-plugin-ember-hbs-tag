import { convertFixtureToJson } from '@codemod-utils/tests';

const inputProject = convertFixtureToJson('index/my-app/input');
const outputProject = convertFixtureToJson('index/my-app/output');

export { inputProject, outputProject };
