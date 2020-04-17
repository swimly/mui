import { newE2EPage } from '@stencil/core/testing';

describe('hc-textfield', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<hc-textfield></hc-textfield>');

    const element = await page.find('hc-textfield');
    expect(element).toHaveClass('hydrated');
  });
});
