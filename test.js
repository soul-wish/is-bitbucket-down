import { expect } from 'chai';

describe('cli.js should return result', () => {
    let response;
    before((done) => {
        const execFile = require('child_process').execFile;
        execFile('./cli.js', (error, stdout) => {
            if (error) {
                throw error;
            }
            response = stdout;
            done();
        });
    });
    it('result should match up or down', () => {
        expect(response).to.match(/up|down/);
    });
});
