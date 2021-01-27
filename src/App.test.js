import { render, fireEvent } from '@testing-library/react';
import App from './App';


describe('Verificando se existe componentes do app.js', () => {
  it('confirmar a label com o nome email', () => {
    const { getByLabelText } = render(<App />);
    const textoEmail = getByLabelText(/Email/i);
    expect(textoEmail).toBeInTheDocument();
  });
  it('verificar se tem o campo de input com a label email e tipo email', () => {
    const { getByLabelText } = render(<App />);
    const inputEmail = getByLabelText(/Email/i);
    expect(inputEmail).toBeInTheDocument();
    expect(inputEmail.type).toBe('email');
  });
  it('Verifica se existe 2 botões', () => {
    const { getAllByRole } = render(<App />);
    const btn = getAllByRole('button');
    expect(btn.length).toBe(2);
  })
  it('Verifica click do btn enviar, texto aparece na tela', () => {
    const { getByTestId, getByLabelText } = render(<App />);
    const emailInput = getByLabelText('Email');
    const sendButton = getByTestId('id-send');
    const userEmail = getByTestId('id-email-user');
    fireEvent.change(emailInput, { target: { value: 'flaviolunaferreira@gmail.com' } });
    fireEvent.click(sendButton);
    expect(emailInput.value).toBe('');
    expect(userEmail.textContent).toBe('Valor: flaviolunaferreira@gmail.com');
  });
});


