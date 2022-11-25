import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter, Routes } from 'react-router-dom';
import Login from '../pages/Login/Login';

const expectedEmail = 'test@test.com'

const expectedPassword = 'Abc_102342'

function testLogin(element){
    render(
        <BrowserRouter>
            <Routes>
            {element}
            </Routes>
        </BrowserRouter>
    );
}

describe('Test of Login Page', () => {
    render(<Login/>);
    beforeEach(() => {
        global.fetch = jest.fn(() => Promise.resolve({
            json: () => Promise.resolve({ email: expectedEmail, password: expectedPassword }),
        }));
    });

    test('get email input value login', async () => {
        renderWithProvider(<Login/>);

        const emailValue = screen.getBytextId('email');

        expect(emailValue).toBeInTheDocument();

        fireEvent.change(emailValue, { target: {
            value: 'testemail@gmail.com'
        }});

        expect(emailValue).toHaveValue('testemail@gmail.com')
    });

    test('get password input value login', async () => {
        renderWithProvider(<Login/>);

        const passwordValue = screen.getBytextId('password');

        expect(passwordValue).toBeInTheDocument();

        fireEvent.change(passwordValue, { target: {
            value: 'Tester-109920'
        }});

        expect(passwordValue).toHaveValue('Tester-109920')
    });
});