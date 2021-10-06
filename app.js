const Ops = require('./operations')
const express = require('express');
const app = express();
const PORT = 3000;
app.listen(PORT, () => { console.log(`Listening on port ${PORT}`) })
app.use(express.json());
app.get('/sum', (req, res) => {
	let args = req.query.args;
	let sum = 0;
	try {
		args = JSON.parse(args);
		console.log(args);
		args.forEach(arg => {
			sum += arg;
		});
		res.status(200).send(sum.toString());
	} catch (error) {
		console.error(args);
		res.status(400).send("You have to send a valid JSON array");
	}
});
app.get('/sub', (req, res) => {
	let args = req.query.args;
	let sum = 0;
	try {
		args = JSON.parse(args);
		sum = args[0];
		for (let i = 1; i < args.length; i++) {
			sum -= args[i];
		}
		res.status(200).send(sum.toString());
	} catch (error) {
		res.status(400).send("You have to send a valid JSON array");
	}

});
app.get('/mul', (req, res) => {
	let args = req.query.args;
	let result = 1;
	try {
		args = JSON.parse(args);
		console.log(args);
		args.forEach(arg => {
			result *= arg;
		});
		res.status(200).send(result.toString());
	} catch (error) {
		console.error(args);
		res.status(400).send("You have to send a valid JSON array");
	}

});
app.get('/div', (req, res) => {
	let args = req.query.args;
	let result = 0;
	try {
		args = JSON.parse(args);
		result = args[0];
		for (let i = 1; i < args.length; i++) {
			result /= args[i];
		}
		res.status(200).send(result.toString());
	} catch (error) {
		console.error(args);
		res.status(400).send("You have to send a valid JSON array");
	}

});
app.get('/fact', (req, res) => {
	console.log(req.query);
	const n = parseInt(req.query.args);
	if (isNaN(n)) {
		res.status(400).send('You have to send a single number in the args field');

	} else if (n < 0) {
		res.status(404).send('Cannot calculate the factorial of a negative number');
	}
	else {
		res.status(200).send(Ops.fact(n).toString());
	}

});
app.get('/prime', (req, res) => {
	let arg = req.query.args;
	arg = parseInt(arg);
	if (isNaN(arg)) {
		res.status(400).send('You have to send a single integer in the args field');
	} else {
		res.status(200).send(Ops.isPrime(arg));
	}
});
app.get('/sqrt', (req, res) => {
	let arg = req.query.args;
	arg = parseFloat(arg);
	if (isNaN(arg)) {
		res.status(400).send('You have to send a single float in the args field');
	} else {
		res.status(200).send(Math.sqrt(arg).toString);
	}
});
app.get('/PI', (req, res) => {
	res.status(200).send(Math.PI.toString());
});
app.get('/SQRT2', (req, res) => {
	res.status(200).send(Math.SQRT2.toString());
});
app.get('/E', (req, res) => {
	res.status(200).send(Math.E.toString());
});
app.get('/hyp', (req, res) => {
	let args = req.query.args;
	try {
		args = JSON.parse(args);
		let result = Math.sqrt(args[0] * args[0] + args[1] * args[1]);
		res.status(200).send(result.toString());
	} catch (error) {
		console.error(args);
		res.status(400).send("You have to send a valid JSON array");
	}
});
app.get('/pow',(req, res) => {
	let args = req.query.args;
	try {
		args = JSON.parse(args);
		let result = Ops.pow(args[0], args[1]);
		res.status(200).send(result.toString());
	} catch (error) {
		console.error(args);
		res.status(400).send("You have to send a valid JSON array");
	}
})