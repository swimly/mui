import { newE2EPage } from '@stencil/core/testing';

describe('hc-dialog', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<hc-dialog></hc-dialog>');

    const element = await page.find('hc-dialog');
    expect(element).toHaveClass('hydrated');
  });
});
