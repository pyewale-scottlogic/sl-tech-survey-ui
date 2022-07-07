import {React} from 'react';
import CreateCompany from './CreateCompany';
import {render, fireEvent, screen, cleanup} from '@testing-library/react';

afterEach(cleanup)

//testing a controlled component form.
it('Inputing text updates the state', () => {
    render(<CreateCompany />);
    
    const input = getCompanyName()
    const company = 'Company 1'
    fireEvent.change(input, {target: {value: company } } )
    expect(input['value']).toBe(company)
    expect(screen.queryByText(/invalid/i)).toBeNull();

    const company2 = 'Company $$$'
    fireEvent.change(input, {target: {value: company2 } } )
    expect(input['value']).toBe(company2)
    expect(screen.getByText(/invalid/i)).toBeTruthy();
 })

function getCompanyName() {
    return screen.getByRole('textbox', {
        placeholder: /Enter Company Name/i
    });
}
