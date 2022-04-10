import React from "react";

import '@testing-library/jest-dom/extend-expect';

import { render, cleanup } from '@testing-library/react';

import { screen } from '@testing-library/react';


import Contact from '..';

afterEach(cleanup)

describe('Contact component renders', () => {
      it('renders', () => {
      render(<Contact />);
    });

    // eslint-disable-next-line jest/no-identical-title
    it('renders', () => {
        const { asFragment } = render(<Contact />)
        expect(asFragment()).toMatchSnapshot()
      })
})

it('renders', () => {
    render(<Contact />)
    screen.getByTestId('h1tag')
    
    // .toHaveTextContent('Contact me')
  })
    
  // eslint-disable-next-line jest/no-identical-title
it('renders', () => {
     render(<Contact />)
    screen.getByTestId('button')

    //.toHaveTextContent('Submit')
  })

