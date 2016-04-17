/**
 * Constructor of a CSSU instance.
 *
 * @param Object params, including properties:
 *  - Boolean logger, true if all passes should log in the console
 */
var Cu = function (params) {
  console.log('Initializing CSSU with params:', params)
  var logger = params.logger;

  var cu = {
    /**
     * The main body of the CSS Unit method, which takes an element, applies styles,
     * and then sees if the computed styles match.
     *
     * @param Object, the element to apply styles to. Should contain properties:
     *        DOM Node `element`, the element to test.
     *        String `name`, a human-reasabile name of the element.
     * @param Object styles, the styles to apply to the element and see if they match
     */
    assert: function (cuElement, styles) {
      var element = cuElement.element;
      var name = cuElement.name;

      for (var property in styles) {
        // Cache the actual value
        var actualValue = window.getComputedStyle(element)[property];
        var testValue = styles[property];
        var appliedTestValue;

        // Set the element's value to the test value
        element.style[property] = testValue;
        appliedTestValue = window.getComputedStyle(element)[property];

        // Set the element's value back to the original value
        element.style[property] = actualValue;

        if (appliedTestValue !== actualValue) {
          console.error('FAIL: For element named', name, 'the', property, 'should be', testValue, 'but is', actualValue);
        } else {
          if (logger) {
            console.log('PASS: For element named', name, 'the', property, 'should be', testValue, 'and is', actualValue);
          }
        }
      }
    }
  };

  return cu;
};
