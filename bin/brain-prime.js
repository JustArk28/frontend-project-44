#!/usr/bin/env node

import startGame from '../src/index.js';
import { gamePrime, rules } from '../src/games/prime.js';

startGame(gamePrime, rules);
