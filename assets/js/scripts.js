// Initialize on page load
$(window).on('load', () => {
    const $loader = $('#mpa-loader');
    if ($loader.length) {
        $loader.css('width', '100%');
        setTimeout(() => {
            $loader.css('opacity', '0');
            setTimeout(() => {
                $loader.css('width', '0');
                $loader.css('opacity', '1');
            }, 300);
        }, 300);
    }
});

$(function () {

    // Toggle the side navigation
    const $sidebarToggle = $('#sidebarToggle');
    if ($sidebarToggle.length) {
        $sidebarToggle.on('click', function (event) {
            event.preventDefault();
            $('body').toggleClass('zd-sidenav-toggled');
            localStorage.setItem('zd|sidebar-toggle', $('body').hasClass('zd-sidenav-toggled'));
        });
    }

    // Toggle Code Visibility
    $(document).on('click', '.btn-toggle-code', function () {
        const $wrapper = $(this).closest('.code-wrapper');
        const $codeBlock = $wrapper.find('pre');

        if ($codeBlock.hasClass('d-none')) {
            $codeBlock.removeClass('d-none');
            $(this).html('<i class="ph-bold ph-eye-slash me-1"></i> Hide Code');
        } else {
            $codeBlock.addClass('d-none');
            $(this).html('<i class="ph-bold ph-code me-1"></i> Show Code');
        }
    });

    // Copy Code to Clipboard
    $(document).on('click', '.btn-copy-code', function () {
        const $btn = $(this);
        const $wrapper = $btn.closest('.code-wrapper');
        const codeContent = $wrapper.find('code').text();

        navigator.clipboard.writeText(codeContent).then(() => {
            const originalText = $btn.html();
            $btn.html('<i class="ph-bold ph-check me-1"></i> Copied!');
            $btn.addClass('btn-success').removeClass('btn-outline-secondary');

            setTimeout(() => {
                $btn.html(originalText);
                $btn.removeClass('btn-success').addClass('btn-outline-secondary');
            }, 2000);
        }).catch(err => {
            console.error('Failed to copy: ', err);
        });
    });

    // MPA Loading Effect on link click
    $(document).on('click', 'a', function () {
        const $link = $(this);
        const href = $link.attr('href');

        if (href && href !== '#' && !href.startsWith('http') && !$link.attr('data-bs-toggle')) {
            const $loader = $('#mpa-loader');
            if ($loader.length) {
                $loader.css({
                    'width': '70%',
                    'opacity': '1'
                });
            }
        }
    });

});
