import { newE2EPage } from '@stencil/core/testing';

describe('hc-checkbox-group', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<hc-checkbox-group></hc-checkbox-group>');

    const element = await page.find('hc-checkbox-group');
    expect(element).toHaveClass('hydrated');
  });
});
