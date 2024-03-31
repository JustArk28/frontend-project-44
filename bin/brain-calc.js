#!/usr/bin/env node

import startGame from '../src/index.js';
import { gameCalc, rules } from '../src/games/calc.js';

startGame(gameCalc, rules);
