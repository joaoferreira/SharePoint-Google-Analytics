(function (i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {
        (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date(); a = s.createElement(o),
    m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

ga('create', 'UA-92611503-1', 'auto');
ga('send', 'pageview');

/*The code bellow is not part of the google analytics and can be removed if needed*/
/*This code adds the custom icon to site collection feaures*/
document.addEventListener("DOMContentLoaded", function () {
    var pathGoogleAnalytics = "";
    var scripts = document.getElementsByTagName("script");

    //gets the location of the breadcrumb script to inject the css
    if (scripts && scripts.length > 0) {
        for (var i in scripts) {
            if (scripts[i].src && scripts[i].src.match(/ga\.js$/)) {
                pathGoogleAnalytics = scripts[i].src.replace(/(.*)ga\.js$/, "$1");
                pathGoogleAnalytics = pathGoogleAnalytics.replace("/js/", "/");
                break;
            }
        }
    };

    //Feature Images
    findImagesByRegexp();
    function findImagesByRegexp() {
        var images = Array.prototype.slice.call((document.getElementById('DeltaPlaceHolderMain') || document).getElementsByTagName('img'));
        var length = images.length;
        for (var i = 0; i < length; ++i) {
            if (images[i].src.indexOf('spanalytics.png') != -1) {
                images[i].src = pathGoogleAnalytics + '/images/spanalytics.png';
            }
        }
    }
});