import { fireEvent, render, screen } from '@testing-library/react';
import App from '../App';

describe('Tests of routes', () => {
  beforeEach(() => {
    const currentState = window.history.state;

    window.history.replaceState(currentState, '', '/');
  });

  test('render the page path login', async () => {
    window.history.pushState({}, 'Login Page Test', '/login');

    render(<App />)

    const loginPage = screen.getByTestId('login-page-test');

    expect(loginPage).toBeInTheDocument();
  });

  it('render the page path main', async () => {
    render(<App />)

    const passwordValue = screen.getBytextId('password-test');
    const emailValue = screen.getBytextId('email-test');

    const login = screen.getByTestId('login-btn-test');

    fireEvent.change(passwordValue, {
      target: {
        value: 'Tester-109920'
      }
    });

    fireEvent.change(emailValue, {
      target: {
        value: 'testemail@gmail.com'
      }
    });

    expect(passwordValue).toHaveValue('Tester-109920')

    expect(emailValue).toHaveValue('testemail@gmail.com');

    fireEvent.click(login);

    const mainPage = screen.getByTestId('main-page-test');

    expect(mainPage).toBeInTheDocument();
  });
});