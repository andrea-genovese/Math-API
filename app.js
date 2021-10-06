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
    } catch (error) {
        console.error(args);
        res.status(400).send("You have to send a valid JSON array");
        return;
    }
    console.log('success');
    res.status(200).send(sum.toString());
})
app.get('/sub', (req, res) => {
    let args = req.query.args;
    let sum = 0;
    try {
        args = JSON.parse(args);
        sum = args[0];
        for(let i = 1; i < args.length; i++) {
            sum -= args[i];
        }
    } catch (error) {
        console.error(args);
        res.status(400).send("You have to send a valid JSON array");
        return;
    }
    res.status(200).send(sum.toString());
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