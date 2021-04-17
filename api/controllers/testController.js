module.exports = {
	index: async (req, res) => {
		try {
			return res.status(200).json('Test Connection Success');
		} catch (err) {
			return res.status(500).json(err);
		}
	}
}
