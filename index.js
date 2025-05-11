/**
 * Enhanced Name Matcher
 * A robust name matching library that combines multiple algorithms
 * for optimal name matching performance
 */

// Import main classes and utilities
import EnhancedNaturalMatcher from './src/enhanced-natural-matcher.js';
import EnhancedMatcher from './src/enhanced-matcher.js';
import * as NameNormalizer from './src/name-normalizer.js';

// Convenience function for simple matching
export function match(name1, name2, options = { threshold: 0.75 }) {
  const matcher = new EnhancedNaturalMatcher(options);
  return matcher.getSimilarity(name1, name2);
}

// Convenience function for checking if names match
export function isMatch(name1, name2, options = { threshold: 0.75 }) {
  const matcher = new EnhancedNaturalMatcher(options);
  return matcher.isMatch(name1, name2);
}

// Convenience function for matching a group of names
export function matchGroup(nameGroup, options = { threshold: 0.75 }) {
  const matcher = new EnhancedNaturalMatcher(options);
  return matcher.matchNameGroup(nameGroup);
}

// Export all components
export { EnhancedNaturalMatcher, EnhancedMatcher };
export { NameNormalizer };
