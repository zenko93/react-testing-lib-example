import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('Test APP', () => {
  test('check getByText, getByRole, getByPlaceholderText', () => {
    render(<App />);
    // getBy - выбросит ошибку если такого элемента нет
    // queryBy - не выбросит ошибку если елемента нет
    // findBy - используется для ассинхронных операций

    const helloWorld = screen.getByText(/hello world/i);
    const btn = screen.getByRole('button');
    const input = screen.getByPlaceholderText(/input value/i);

    expect(helloWorld).toBeInTheDocument();
    expect(btn).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    // expect(input).toMatchSnapshot();
    // screen.debug(); // log
  });

  test('check queryBy', () => {
    render(<App />);
    const textDoesntExist = screen.queryByText(/hello2/i)
    expect(textDoesntExist).toBeNull();
  });

  test('check finBy', async() => {
    render(<App />);
    const data = await screen.findByText(/data/i);
    expect(data).toBeInTheDocument();
    expect(data).toHaveStyle({color: 'red'});
  });

  test('CLICK EVENT', async() => {
    render(<App />);
    const btn = screen.getByTestId('toggle-btn');
    expect(screen.queryByTestId('toggle-elem')).toBeNull;

    fireEvent.click(btn);
    expect(screen.queryByTestId('toggle-elem')).toBeInTheDocument();

    fireEvent.click(btn);
    expect(screen.queryByTestId('toggle-elem')).toBeNull;
  });

  test('INPUT EVENT', async() => {
    render(<App />);
    const input = screen.getByPlaceholderText(/input value/i);
    expect(screen.queryByTestId('value-elem')).toContainHTML('');
    // Искусственное событие
    // fireEvent.input(input, {
    //   target: {value: '123123'}
    // });
    // Воспроизводит действия пользователя, обрабатываются нажатия клавиш и т.д.
    userEvent.type(input, '123123');
    expect(screen.queryByTestId('value-elem')).toContainHTML('123123');
  });
})

