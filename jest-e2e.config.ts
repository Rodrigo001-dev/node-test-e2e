import jestConfig from "./jest.config";

export default {
  ...jestConfig,
  testEnvironment: './prisma/prisma-test-environment.ts',
  // o testRegex vai falar quais são os arquivos que eu vou procurar para testar
  testRegex: '.e2e-spec.ts$',
}