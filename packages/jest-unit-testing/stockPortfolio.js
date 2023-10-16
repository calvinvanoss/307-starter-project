class StockPortfolio {
    constructor() {
        this.portfolio = {};
    }

    isEmpty() {
        return Object.keys(this.portfolio).length === 0;
    }

    countTickers() {
        return Object.keys(this.portfolio).length;
    }

    purchase(ticker, quantity) {
        if (this.portfolio[ticker]) {
            this.portfolio[ticker] += quantity;
        } else {
            this.portfolio[ticker] = quantity;
        }
    }

    sell(ticker, quantity) {
        if (!this.portfolio[ticker]) {
            throw new Error('Ticker not found');
        }
        if (this.portfolio[ticker] < quantity) {
            throw new Error('ShareSaleException');
        }
        if (this.portfolio[ticker] === quantity) {
            // keep only owned symbols
            delete this.portfolio[ticker];
            return;
        }
        this.portfolio[ticker] -= quantity;
    }

    getStock(ticker) {
        if (!this.portfolio[ticker]) {
            throw new Error('Ticker not found');
        }
        return this.portfolio[ticker];
    }
}

export default StockPortfolio;