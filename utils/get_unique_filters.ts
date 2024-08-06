// const fs = require('fs');
// const path = require('path');
import { getLines } from '../utils/lines'
import { Line } from '../types'


// Function to get unique elements by a specific key
const getUniqueElements = <T extends keyof Line>(lineArray: Line[], key: T): string[] => {
  const uniqueElements = new Set<string>();

  lineArray.forEach(item => {
    const value = item[key];
    if (Array.isArray(value)) {
      value.forEach(str => uniqueElements.add(str)); // Add each string from the array
    } else if (typeof value === 'string') {
      uniqueElements.add(value); // Add the string itself
    }
  });

  return Array.from(uniqueElements);
};


const lines = getLines(); // get all lines
// const lineKeys = getLineKeys(lines); 
export const uniqueInstruments = getUniqueElements(lines, 'instruments');
export const uniqueRegions = getUniqueElements(lines, 'regions');
export const uniqueWaveRange = getUniqueElements(lines, 'wave_range');