const knex = require('./connection/knex')

module.exports = {
	index: async (req, res) => {
    console.log(`Hitting ${req.url} with a ${req.method} request.`);
		try {
      const result = await knex('test');
			return res.status(200).json({
        result: 'success',
        data: result
      })
		} catch (err) {
			return res.status(500).json({
        result: 'failure',
        error: err
      });
		};
	}
}
