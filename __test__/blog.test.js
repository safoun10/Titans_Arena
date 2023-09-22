import React from 'react';
import { render, screen } from '@testing-library/react';
import Blogs from '../src/Pages/Blogs/Blogs';

test('should render a message', () => {
    const message = 'Hello world!';

    render(<Blogs message={message} />);

    const element = screen.getByText(message);

    expect(element).toBeInTheDocument();
});