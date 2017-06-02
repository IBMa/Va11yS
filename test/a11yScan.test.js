'use strict';

describe("Accessibility Test", function () {
    var originalTimeout;

    var testcasesHTML = window.__html__;

    for (var testFile in testcasesHTML) {

        (function (testFile) {
            describe("\"" + testFile + "\"", function () {
                beforeEach(function () {
                    originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;

                    jasmine.DEFAULT_TIMEOUT_INTERVAL = 180000;
                });

                it('should have no accessibility violations', function (done) {
                    var testDataFileContent = testcasesHTML[testFile];

                    // Perform the accessibility scan using the AAT.getCompliance API
                    AAT.getCompliance(testDataFileContent, testFile, function (results) {

                        // Call the AAT.assertCompliance API which is used to compare the results with baseline object if we can find one that
                        // matches the same label which was provided.
                        var returnCode = AAT.assertCompliance(results);

                        if (returnCode !== 0) {
                            console.log(AAT.stringifyResults(results));
                        }

                        // In the case that the violationData is not defined then trigger an error right away.
                        expect(returnCode).toBe(0, "Scanning " + testFile + " failed.");

                        // Mark the testcases as done, when using jasmine as the test framework.
                        done();
                    });
                });

                afterEach(function () {
                    jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
                });
            });
        })(testFile);
    }
});