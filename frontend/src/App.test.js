import { render, screen } from '@testing-library/react';
import Fun from './Task3';
import App from './App';

test('Task1', () => {
  render(<App />);
  const linkElement = screen.getByTestId("comp");
  expect(linkElement).toBeInTheDocument();
});

test('Task2', () => {
  render(<App />);
  const linkElement = screen.getByTestId("comp");
  expect(linkElement).toBeInTheDocument("Hello World");
});

test('Task3', () => {
  render(<Fun/>);
  const linkElement = screen.getByTestId("task3");
  expect(linkElement).toBeInTheDocument("CAR");
});