/**
 * Custom Stylelint plugin that warns when deprecated Cycle Design tokens are used.
 *
 * Add tokens to DEPRECATED_TOKENS when they are renamed/removed.
 * Each entry maps the old token name to the new replacement.
 */

import stylelint from 'stylelint'

const ruleName = 'cycle-design/no-deprecated-tokens'
const messages = stylelint.utils.ruleMessages(ruleName, {
  deprecated: (oldToken, newToken) =>
    `"${oldToken}" is deprecated. Use "${newToken}" instead. Will be removed in v2.`,
})

/**
 * Map of deprecated tokens -> replacement tokens.
 * Add entries here when a token is renamed.
 *
 * Example:
 *   '--spacing-quarck': '--spacing-quark',
 */
const DEPRECATED_TOKENS = {
  // No deprecated tokens yet — infrastructure ready for future use
}

const plugin = stylelint.createPlugin(ruleName, (enabled) => {
  if (!enabled) return

  return (root, result) => {
    root.walkDecls((decl) => {
      for (const [oldToken, newToken] of Object.entries(DEPRECATED_TOKENS)) {
        if (decl.value.includes(`var(${oldToken})`)) {
          stylelint.utils.report({
            message: messages.deprecated(oldToken, newToken),
            node: decl,
            result,
            ruleName,
            severity: 'warning',
          })
        }
      }
    })
  }
})

export default plugin
