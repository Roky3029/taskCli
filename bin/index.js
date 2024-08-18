#! /usr/bin/env node

// in process.argv our parameters will start at index 2, so for example, if we have "task add 'Buy groceries'" the parameter "add" would be the 2nd

import { paramHandler } from './paramHandler.js'

paramHandler(process.argv[2])
