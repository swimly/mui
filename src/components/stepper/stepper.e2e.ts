import { newE2EPage } from '@stencil/core/testing';

describe('hc-stepper', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<hc-stepper></hc-stepper>');

    const element = await page.find('hc-stepper');
    expect(element).toHaveClass('hydrated');
  });
});
