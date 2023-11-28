import { render, screen } from '@/test-utils';
import { Sidebar } from "./Sidebar";

describe('Sidebar component', () => {
    it('has load correct components', () => {
        render(<Sidebar />);
        // check if all components are rendered
        expect(screen.getByTestId("sidebar")).toBeInTheDocument();
    });
});