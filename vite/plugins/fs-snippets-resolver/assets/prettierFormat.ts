import { execSync } from 'child_process';

export function prettierFormat(path: string) {
  execSync(`prettier --write ${path} ./.prettierrc`);
}
