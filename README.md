# Math-API

This simple API allows to calculate some simple math operation using `GET` request and specifying the arguments in the query.
The server runs on Node.js.
There are three types of function:

### List Functions
List functions accept a JSON array as argument, for example `http://SERVERDOMAIN/sum?args=[1,2,3]`

### Single Value Functions
Single value function accept one value as argument, for example `http://SERVERDOMAIN/fact?args=4`
### Constants
Constants don't need any argument, if you insert any it will be ignored. For example `http://SERVERDOMAIN/PI`
#### Available functions
name | type | return value
-----|------|------------
sum|List|The result of arg1+arg2+arg3...
sub|List|The result of arg1-arg2-arg3...
mul|List|The result of arg1\*arg2\*arg3...
div|List|The result of arg1/arg2/arg3...
prime|Value|`true` if the argument is a prime number, `false` otherwise|
|fact|Value|The factorial of the argument|
|PI|Constant|The constant PI|
|E|Constant|Euler's number|
