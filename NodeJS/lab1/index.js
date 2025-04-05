const fs = require('fs').promises;
const path = require('path');

const readDirFile = async () => {
	try {
		const files = await fs.readdir('./');
		files.fo;
		files.forEach(async (file) => {
			const filepath = path.join('./', file);
			const stats = await fs.stat(filepath);
			const type = stats.isFile()
				? 'File'
				: stats.isDirectory()
				? 'Directory'
				: '';
			console.log(file + ' is a ' + type);
		});
	} catch (err) {
		console.log(err);
	}
};
readDirFile();
