# Split.js

Split.js is a clientside A/B testing library.

Currently split.js uses google analytics as the datastore for experiments, this may be extended to handle multiple data stores in the future.

## Usage

Basic Usage:

    Split.setup(alternatives, options)

Split.js is useful for running different functions and measuring the results, you define the alternatives that you wish to test:

    Split.setup({
      'a': function(){
        // usually the control test with no changes
      },
      'b': function(){
        // change elements in the page,
      }
    });

When a user hits the page they will be randomly assigned one alternative and that function will be executed.
A custom variable will be set in google analytics with the name of that alternative which you can then pivot your analytics data around.

## Options

There are a number of configurable options that can be parsed as an optional second argument:

    Split.setup({
      // functions
    },{
      cookieName: 'abTest',
      cookieAge: 30,
      customVariableName: 'AB Test alternative',
      customVariableIndex: 1
    });

## Caveats

* `Split.setup` must be loaded before Google analytics otherwise the custom variable will not be tracked,
it may not work inside `$(document).bind("ready", handler)` or an async loader.

* You should also always provide a control test to measure your changes against.

* You can provide as many alternatives as you like but sample size will be much lower and take longer to show real results.

### Note on Patches/Pull Requests

 * Fork the project.
 * Make your feature addition or bug fix.
 * Commit, do not mess with version, or history.
   (if you want to have your own version, that is fine but bump version in a commit by itself I can ignore when I pull)
 * Send me a pull request. Bonus points for topic branches.

## Copyright

Copyright (c) 2013 Andrew Nesbitt. See [LICENSE](https://github.com/andrew/split.js/blob/master/LICENSE) for details.