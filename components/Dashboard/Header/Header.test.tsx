import { Header } from "./Header";
import { render, screen } from '@/test-utils';

describe('Header component', () => {
    it('has load correct components', () => {
        render(<Header />);
        // check if all components are rendered
        expect(screen.getByTestId("header")).toBeInTheDocument();
        expect(screen.getByTestId("logout")).toBeInTheDocument();
    });
});