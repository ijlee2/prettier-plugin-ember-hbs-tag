import { convertFixtureToJson } from '@codemod-utils/tests';

const inputProject = convertFixtureToJson('printers/template-single-quote/input');
const outputProject = convertFixtureToJson('printers/template-single-quote/output');

export { inputProject, outputProject };
