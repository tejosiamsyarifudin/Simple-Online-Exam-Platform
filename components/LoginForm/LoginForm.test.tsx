import { render, screen } from '@/test-utils';
import { LoginForm } from './LoginForm';

describe('Login component', () => {
  it('has load correct components', () => {
    render(<LoginForm />);
    // check if all components are rendered
    expect(screen.getByTestId("username")).toBeInTheDocument();
    expect(screen.getByTestId("password")).toBeInTheDocument();
    expect(screen.getByTestId("login")).toBeInTheDocument();
  });
});
