import {validateName, validateCompanyProject, isFormValid, isError} from './utils';

const validnames = ["Valid", "O'Reilly", "Hamilton-Jones", "St.John", "Dennis White"]
test.each(validnames)('check %s is valid name', (input) => {
  const result = validateName( "x", input)
  expect(result).toStrictEqual({'x' :'valid'});
});

const invalidnames = ['', 'd1', "Great$"]
test.each(invalidnames)('check %s is invalid name', (input) => {
    const result = validateName( "x", input)
    expect(result['x']).not.toMatch(new RegExp('^valid?'));
});

const validcompanies = [...validnames, '3M']
test.each(validcompanies)('check %s is valid company/ project', (input) => {
  const result = validateCompanyProject( "x", input)
  expect(result).toStrictEqual({'x' :'valid'});
});

const invalidcompanies = ['', "Great$"]
test.each(invalidcompanies)('check %s is invalid company/project', (input) => {
    const result = validateName( "x", input)
    expect(result['x']).not.toMatch(new RegExp('^valid?'));
});

test('isFormValid', () => {
    let status = { x : 'valid', 'y': 'valid'}
    expect(isFormValid(status)).toBe(true)
    status = { x : 'valid', 'y': ''}
    expect(isFormValid(status)).toBe(false)
    status = { x : 'field is invalid', 'y': 'valid'}
    expect(isFormValid(status)).toBe(false)
});

test('check isError', () => {
    expect(isError('valid')).toBe(false)
    expect(isError('')).toBe(false)
    expect(isError('some message other than valid or empty')).toBe(true)
});