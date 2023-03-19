const pool = require("../Database/db");
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));
exports.savedata = async (req, res) => {
  try {
    const response = await fetch("https://api.wazirx.com/api/v2/tickers");
    const resjson = await response.json();
    const tickers = Object.entries(resjson).slice(0, 10);
    // console.log(tickers);
    const values = [];

    for (const [name, { last, buy, sell, volume, base_unit }] of tickers.slice(
      0,
      10
    )) {
      values.push([name, last, buy, sell, volume, base_unit]);
    }
    // const values = tickers.map(([name, ticker]) => [
    //   name,
    //   ticker.last,
    //   ticker.buy,
    //   ticker.sell,
    //   ticker.volume,
    //   ticker.base_unit,
    // ]);
    const placeholders = Array(tickers.length)
      .fill()
      .map(
        (_, index) =>
          `($${index * 6 + 1}, $${index * 6 + 2}, $${index * 6 + 3}, $${
            index * 6 + 4
          }, $${index * 6 + 5}, $${index * 6 + 6})`
      )
      .join(",");

    const query = `INSERT INTO tickers(name,last,buy,sell,volume,base_unit) VALUES ${placeholders}`;

    await pool.query(query, values.flat());
    console.log(values);
    res.send("Tickers are saved");
  } catch (error) {
    console.log(error.message);
  }
};

exports.getdata = async (req, res) => {
  try {
    const query = " SELECT * FROM tickers LIMIT 10";
    const alldata = await pool.query(query);
    res.json(alldata.rows);
  } catch (error) {
    console.log(error.message);
  }
};
