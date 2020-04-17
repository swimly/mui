import { newE2EPage } from '@stencil/core/testing';

describe('hc-selection', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<hc-selection></hc-selection>');

    const element = await page.find('hc-selection');
    expect(element).toHaveClass('hydrated');
  });
});
