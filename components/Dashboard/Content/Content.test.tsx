import { Content } from "./Content";
import { render, screen } from '@/test-utils';

describe('Content component', () => {
    it('has load correct components', () => {
        render(<Content />);
        // check if all components are rendered
        expect(screen.getByTestId("content")).toBeInTheDocument();
    });
});