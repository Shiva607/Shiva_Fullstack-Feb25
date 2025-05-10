test('Simple test', () => {
	expect(2 + 2).toBe(4);
});

/* 
test('Failed test', () => {
	expect(2 + 2).toBe(5);
});
 */
describe('Simple test cases', () => {
	test('Simple test 1', () => {
		expect(2 + 2).toBe(4);
	});
	test('Simple test 2', () => {
		expect(2 + 2).toBe(4);
	});
});
