import mut from './module.js'; // MUT = Module Under Test

test('Testing sum -- success', () => {
  const expected = 30;
  const got = mut.sum(12, 18);
  expect(got).toBe(expected);
});

test('Testing div -- success', () => {
    const expected = 3;
    const got = mut.div(12, 4);
    expect(got).toBe(expected);
});

test('Testing containsNumbers -- success', () => {
    const got = mut.containsNumbers('abc123');
    expect(got).toBeTruthy();
})

test('Testing containsNumbers -- failure', () => {
    const got = mut.containsNumbers('abc');
    expect(got).toBeFalsy();
})