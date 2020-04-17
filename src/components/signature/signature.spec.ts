import { Signature } from './signature';

describe('hc-signature', () => {
  it('builds', () => {
    expect(new Signature()).toBeTruthy();
  });
});
