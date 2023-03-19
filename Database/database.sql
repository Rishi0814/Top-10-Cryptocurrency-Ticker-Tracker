CREATE DATABASE crypto;

CREATE TABLE tickers (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    last NUMERIC(20, 8) NOT NULL,
    buy NUMERIC(20, 8) NOT NULL,
    sell NUMERIC(20, 8) NOT NULL,
    volume NUMERIC(20, 8) NOT NULL,
    base_unit VARCHAR(10) NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
);
