# CI Failure Diagnosis

## Failure 1

Step: Install dependencies

Error:
npm install used instead of npm ci

Cause:
Using npm install can create non-reproducible dependency installs.

## Failure 2

Step: Test job sequencing

Error:
Test job missing needs: install

Cause:
Tests may run before dependencies are available.

## Failure 3

Step: Test execution

Error:
No checkout or dependency installation in test job

Cause:
The test job runs on a fresh runner with no source code or node_modules.