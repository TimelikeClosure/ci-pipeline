const { expect } = require('chai');

describe('Failures', () => {
    it('should fail', async () => {
        expect(true).to.be.false;
    });
});
