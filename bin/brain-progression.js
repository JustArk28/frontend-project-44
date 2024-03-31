#!/usr/bin/env node

import startGame from '../src/index.js';
import { gameProgression, rules } from '../src/games/progression.js';

startGame(gameProgression, rules);
