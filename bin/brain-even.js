#!/usr/bin/env node

import startGame from '../src/index.js';
import { gameEven, rules } from '../src/games/even.js';

startGame(gameEven, rules);
