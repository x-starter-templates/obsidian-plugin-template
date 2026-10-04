import { readFileSync } from 'node:fs';

const manifest = JSON.parse(readFileSync('manifest.json', 'utf8'));
const versions = JSON.parse(readFileSync('versions.json', 'utf8'));

const { version, minAppVersion } = manifest;

if (typeof minAppVersion !== 'string' || minAppVersion.length === 0) {
  console.error('manifest.json is missing a valid minAppVersion string.');
  process.exit(1);
}

const knownMinAppVersions = Object.values(versions);
if (!knownMinAppVersions.includes(minAppVersion)) {
  console.error(
    [
      `minAppVersion "${minAppVersion}" is not recorded in versions.json.`,
      `Add an entry for the current plugin version, for example:`,
      `  "${version}": "${minAppVersion}"`,
      '',
      'Obsidian uses versions.json to pick a compatible plugin version when',
      'the running app is older than the latest minAppVersion.',
    ].join('\n'),
  );
  process.exit(1);
}

console.log(
  `OK: minAppVersion "${minAppVersion}" is present in versions.json (plugin version ${version}).`,
);
