/**
 * test scenarios for detectTriangle
 *
 * - detectTriangle function
 *   - should throw error when input is not a number
 *   - should throw error when input is not a positive number
 *   - should throw error when input is triangle inequality violation
 *   - should return "Segitiga Sama Sisi" when all input are equal
 *   - should return "Segitiga Sama Kaki" when two input are equal
 *   - should return "Segitiga Sembarang" when all input are different
 */

import { describe, expect, test } from 'vitest';
import detectTriangle from './detectTriangle';

describe('detectTriangle function', () => {
  test('should throw error when input is not a number', () => {
    expect(() => detectTriangle('a', 2, 3)).toThrowError('Input must be a number');
    expect(() => detectTriangle(1, 'b', 3)).toThrowError('Input must be a number');
    expect(() => detectTriangle(1, 2, 'c')).toThrowError('Input must be a number');
  });

  test('should throw error when input is not a positive number', () => {
    expect(() => detectTriangle(-1, 2, 3)).toThrowError('Input must be a positive number');
    expect(() => detectTriangle(1, -2, 3)).toThrowError('Input must be a positive number');
    expect(() => detectTriangle(1, 2, -3)).toThrowError('Input must be a positive number');
    // Zero is not a positive and negative number
    expect(() => detectTriangle(0, 2, 3)).toThrowError('Input must be a positive number');
  });

  test('should throw error when input is triangle inequality violation', () => {
    expect(() => detectTriangle(1, 2, 3)).toThrowError('Input is triangle inequality violation');
    expect(() => detectTriangle(5, 1, 3)).toThrowError('Input is triangle inequality violation');
    expect(() => detectTriangle(3, 4, 1)).toThrowError('Input is triangle inequality violation');
  });
});
