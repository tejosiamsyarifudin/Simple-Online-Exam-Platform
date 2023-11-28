import { render, screen } from '@/test-utils';
import { Dashboard } from "./Dashboard";

describe('Dashboard component', () => {
    it('has load correct components', () => {
        render(<Dashboard />);
        // check if all components are rendered
        expect(screen.getByTestId("dashboard")).toBeInTheDocument();
    });
});