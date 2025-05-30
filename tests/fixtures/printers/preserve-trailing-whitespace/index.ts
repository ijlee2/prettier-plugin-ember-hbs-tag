import { convertFixtureToJson } from '@codemod-utils/tests';

const inputProject = convertFixtureToJson('printers/preserve-trailing-whitespace/input');
const outputProject = convertFixtureToJson('printers/preserve-trailing-whitespace/output');

export { inputProject, outputProject };
