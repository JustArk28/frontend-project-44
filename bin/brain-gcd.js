#!/usr/bin/env node

import startGame from '../src/index.js';
import { gameGcd, rules } from '../src/games/gcd.js';

startGame(gameGcd, rules);
