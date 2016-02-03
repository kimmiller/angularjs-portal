define(['require'], function(require){

    return {
      widgetView : {templateUrl: require.toUrl('./partials/home-widget-view.html')},
      widgetFocus : {
                      templateUrl: require.toUrl('./partials/widget-card.html'),
                      controller : 'StaticContentController as widgetCtrl'
                    }
    }

});

