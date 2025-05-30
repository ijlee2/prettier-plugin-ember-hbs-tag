import { convertFixtureToJson } from '@codemod-utils/tests';

const inputProject = convertFixtureToJson('printers/default-options/input');
const outputProject = convertFixtureToJson('printers/default-options/output');

export { inputProject, outputProject };
