define(['angular'], function(angular) {

    var config = angular.module('app-config', []);
    config
        .constant('APP_FLAGS', {
            'enableToggle': true,
            'defaultView' : 'compact',
            'compact' : true,
            'expanded' : true,
            'isWeb' : true
        })
        .constant('SERVICE_LOC', {
            'sessionInfo' : '/uPortal/api/session.json',
            'sidebarInfo' : '/web/staticFeeds/sidebar.json',
            'newstuffInfo': '/web/staticFeeds/new-stuff.json',
            'context'     : '/uPortal/',
            'base'        : '/uPortal/api/',
            'layout'      : 'layoutDoc?tab=Welcome',
            'layoutTab' : 'Welcome',
            'marketplace' : {
                'base' : 'marketplace',
                'entries' : '/entries.json'
            },
            'notificationsURL' : '/web/staticFeeds/notifications.json',
            'groupURL' : '/uPortal/api/groups'
        })
        .constant('NAMES', {
            'title' : 'uPortal',
            'ariaLabelTitle' : 'My U W',
            'crest' : '/uPortal/favicon.ico',
            'crestalt' : 'Crest',
            'sublogo' : ''
        })
        .constant('SEARCH',{
            'isWeb' : true
        })
        .constant('NOTIFICATION', {
            'groupFiltering' : true,
            'notificationFullURL' : 'notifications'
        })
        .constant('FOOTER_URLS', [
          { "url" : "https://www.google.com",
            "target" : "_blank",
            "title" : "Example Link to Google"
          }
        ])
        .constant('MISC_URLS',{
            'feedbackURL' : '/uPortal/p/feedback',
            'back2ClassicURL' : null,
            'whatsNewURL' : null,
            'helpdeskURL' : null,
            'webSearchURL' : 'http://www.google.com/search?q=',
            'webSearchDomain' : null,
            'directorySearchURL' : null,
            'kbSearchURL' : null,
            'eventsSearchURL' : null,
            'rootURL' : '/web',
            'loginURL' : '/uPortal/Login?profile=bucky',
            'logoutURL' : '/uPortal/Logout'
        })
        ;

    return config;

});
