import stockPortfolio from './stockPortfolio.js';

test('Testing stockPortfolio -- success', () => {
    const testPortfolio = new stockPortfolio();
    const expected = {};
    const got = testPortfolio.portfolio;
    expect(got).toEqual(expected);
});

test('Testing isEmpty -- success', () => {
    const testPortfolio = new stockPortfolio();
    const got = testPortfolio.isEmpty();
    expect(got).toBeTruthy();
});

test('Testing countTickers(empty) -- success', () => {
    const testPortfolio = new stockPortfolio();
    const got = testPortfolio.countTickers();
    expect(got).toBe(0);
    
});

test('Testing countTickers(non-empty) -- success', () => {
    const testPortfolio = new stockPortfolio();
    testPortfolio.portfolio['GME'] = 5;
    testPortfolio.portfolio['RBLX'] = 10;
    const got = testPortfolio.countTickers();
    expect(got).toBe(2);
});

test('Testing purchase -- success', () => {
    const testPortfolio = new stockPortfolio();
    testPortfolio.purchase('GME', 5);
    const got = testPortfolio.portfolio['GME'];
    expect(got).toBe(5);
});

test('Testing sell -- success', () => {
    const testPortfolio = new stockPortfolio();
    testPortfolio.portfolio['GME'] = 5;
    testPortfolio.sell('GME', 4);
    const got = testPortfolio.portfolio['GME'];
    expect(got).toBe(1);
});

test('Testing sell(ticker not found) -- failure', () => {
    const testPortfolio = new stockPortfolio();
    expect(() => testPortfolio.sell('GME', 5)).toThrow('Ticker not found');
});

test('Testing getStock -- success', () => {
    const testPortfolio = new stockPortfolio();
    testPortfolio.portfolio['GME'] = 5;
    const got = testPortfolio.getStock('GME');
    expect(got).toBe(5);
});

test('Testing getStock(ticker not found) -- failure', () => {
    const testPortfolio = new stockPortfolio();
    expect(() => testPortfolio.getStock('GME')).toThrow('Ticker not found');
});

test('Testing sell(all shares) -- success', () => {
    const testPortfolio = new stockPortfolio();
    testPortfolio.portfolio['GME'] = 5;
    testPortfolio.sell('GME', 5);
    const got = testPortfolio.portfolio['GME'];
    expect(got).toBeUndefined();
});

test('Testing sell(ShareSellException) -- failure', () => {
    const testPortfolio = new stockPortfolio();
    testPortfolio.portfolio['GME'] = 5;
    expect(() => testPortfolio.sell('GME', 10)).toThrow('ShareSaleException');
});