// Initialize on page load
$(window).on('load', () => {
    if (typeof NProgress !== 'undefined') {
        NProgress.done();
    }
});

$(function () {
    // Configure NProgress
    if (typeof NProgress !== 'undefined') {
        NProgress.configure({ showSpinner: false });
    }

    // Toggle the side navigation
    const $sidebarToggle = $('#sidebarToggle');
    if ($sidebarToggle.length) {
        $sidebarToggle.on('click', function (event) {
            event.preventDefault();
            $('body').toggleClass('zd-sidenav-toggled');
            localStorage.setItem('zd|sidebar-toggle', $('body').hasClass('zd-sidenav-toggled'));
        });
    }



    // MPA Loading Effect on link click
    $(document).on('click', 'a', function () {
        const $link = $(this);
        const href = $link.attr('href');

        if (href && href !== '#' && !href.startsWith('http') && !$link.attr('data-bs-toggle')) {
            if (typeof NProgress !== 'undefined') {
                NProgress.start();
            }
        }
    });

});
