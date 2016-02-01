#!/usr/bin/env node
'use strict';
const got = require('got');

got.head('bitbucket.com')
	.then(() => {
		console.log(`\n ⭐  It's up. Lets commit some awesomeness!`);
	})
	.catch(() => {
		console.log(`\n 🔥  It's down... Be calm and go outside.`);
	});
