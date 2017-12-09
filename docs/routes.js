m.route(document.body, "/loading", {
    "/loading": LoadingView,
    "/success": SuccessView,

    "/share-topics-by-email": ShareTopicsByEmail,
    "/share-contact-by-email": ShareContactByEmail,

    "/share-urls-by-qr-code": ShareTopicsByEmail,
    "/share-contact-by-qr-code": ShareContactByQRCode,

    "/info": PersonalContactInformation,
    "/analytics": AnalyticsDashboard,
    "/about": About
});



// Check to make sure the browser supports service workers
if ('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('service-worker.js')
        .then(() => {
            console.log('Service worker registered');
        })
        .catch(err => {
            console.log('Service worker registration failed: ' + err);
        });
}
