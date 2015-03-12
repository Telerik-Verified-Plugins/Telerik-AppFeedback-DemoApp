// Replace with your API key. Find it in Telerik Backend Services > Feedback.
var APP_FEEDBACK_API_KEY = '65902400-041f-11e4-be38-73f40f037825';

(function (global) {
    var DemoViewModel,
        app = global.app = global.app || {};

    DemoViewModel = kendo.data.ObservableObject.extend({

      initAppFeedback: function () {
        if (!this.checkSimulator()) {
          var feedbackOptions = {
            enableShake: true
          };

          window.feedback.initialize(
            APP_FEEDBACK_API_KEY,
            feedbackOptions
          );
        }
      },

      showFeedback: function() {
        if (!this.checkSimulator()) {
          feedback.showFeedback();
        }
      },

        onSuccess: function (result) {
          alert(result == null ? "OK" : JSON.stringify(result));
        },

        onError: function (result) {
          alert(JSON.stringify(result));
        },

        checkSimulator: function() {
            if (window.navigator.simulator === true) {
                alert('This plugin is not available in the simulator.');
                return true;
            } else if (window.feedback === undefined) {
                alert('Plugin not found. Maybe you are running in AppBuilder Companion app which currently does not support this plugin.');
                return true;
            } else {
                return false;
            }
        }
    });

    app.demoService = {
        viewModel: new DemoViewModel()
    };
})(window);