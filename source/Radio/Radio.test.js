import React, { useState } from 'react';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Radio from './Radio';

afterEach(cleanup);

const TestComponent = () => {
  return (
    <>
      <Radio name='alignment' label='Left' value='left' checked='left' action={() => {}} />
      <Radio name='alignment' label='Right' value='right' checked='right' action={() => {}} />
    </>
  );
};

describe('multi-select', () => {
  it('shows correct message', () => {
    render(<TestComponent />);
    expect(screen.queryAllByText('Right').length).toBe(1);
    expect(screen.queryAllByText('Left').length).toBe(1);
  });
});
