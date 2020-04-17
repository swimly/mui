import { newE2EPage } from '@stencil/core/testing';

describe('hc-radio-group', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<hc-radio-group></hc-radio-group>');

    const element = await page.find('hc-radio-group');
    expect(element).toHaveClass('hydrated');
  });
});
