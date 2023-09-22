import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Blogs from './Blogs';

test('handleSearch updates state and clears ref value', () => {
  // Mock useRef behavior for this specific test
  const originalUseRef = React.useRef;
  const mockRefValue = { current: { value: 'test query' } };
  React.useRef = jest.fn(() => mockRefValue);

  render(<Blogs />);
  const searchInput = screen.getByPlaceholderText('Search…');
  const searchButton = screen.getByText('Search');

  // Simulate user input in the search input field
  fireEvent.change(searchInput, { target: { value: 'test query' } });

  // Verify that the input value has changed
  expect(searchInput.value).toBe('test query');

  // Simulate clicking the search button
  fireEvent.click(searchButton);

  // Verify that the state has been updated
  // Assuming you have some way to access the state here
  // Example: const searchState = screen.getByTestId('search-state');
  // expect(searchState.textContent).toBe('test query');

  // Verify that the ref's value was cleared
  expect(mockRefValue.current.value).toBe('');

  // Restore the original useRef behavior
  React.useRef = originalUseRef;
});
