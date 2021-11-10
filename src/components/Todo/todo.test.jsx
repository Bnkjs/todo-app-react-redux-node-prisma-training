import { render, fireEvent } from "@testing-library/react";
import { Todo } from ".";
import React from 'react';
import { PrismaClient } from ".prisma/client";
import renderer from 'react-test-renderer';
// test(' mockClick call length to be 1', () => {
//   const mockClick = jest.fn()
//   render(<Todo/>)
//   const click = document.querySelector('.todo-el')
//   fireEvent.click(click)
//   expect(mockClick.call.length).toBeCloseTo(1)
// })


it('rend correctement', () => {
  const component = renderer
  .create(<Todo/>)
    let tree = component.toJSON()
  expect(tree).toMatchSnapshot();
});