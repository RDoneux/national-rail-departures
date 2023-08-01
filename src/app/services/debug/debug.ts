import dbg from 'debug';
import { environment } from 'src/environments/environment.development';
import packageJson from '../../../../package.json';
import { isDevMode } from '@angular/core';

export const debug = (namespace: string) => dbg(`NRD:${namespace}`);

export function debugInit(): void {
  dbg.enable(
    environment.debug.map((namespace: string) => `NRD:${namespace}`).join(',')
  );
  const welcome = debug('welcome');
  welcome(`Name: ${packageJson.name}`);
  welcome(
    `Version: ${packageJson.version}
      `
  );
  welcome(`State: ${isDevMode() ? 'Development' : 'Production'}`);
}
