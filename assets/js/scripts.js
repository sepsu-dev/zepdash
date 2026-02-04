window.addEventListener('DOMContentLoaded', event => {

    // Toggle the side navigation
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('zd-sidenav-toggled');
            localStorage.setItem('zd|sidebar-toggle', document.body.classList.contains('zd-sidenav-toggled'));
        });
    }

    // Toggle Code Visibility
    document.querySelectorAll('.btn-toggle-code').forEach(btn => {
        btn.addEventListener('click', function () {
            const cardBody = this.closest('.card-body') || this.parentElement.parentElement;
            const codeBlock = cardBody.querySelector('pre');

            if (codeBlock.classList.contains('d-none')) {
                codeBlock.classList.remove('d-none');
                this.innerHTML = '<i class="ph-bold ph-eye-slash me-1"></i> Hide Code';
            } else {
                codeBlock.classList.add('d-none');
                this.innerHTML = '<i class="ph-bold ph-code me-1"></i> Show Code';
            }
        });
    });

    // Copy Code to Clipboard
    document.querySelectorAll('.btn-copy-code').forEach(btn => {
        btn.addEventListener('click', function () {
            const cardBody = this.closest('.card-body') || this.parentElement.parentElement;
            const codeContent = cardBody.querySelector('code').innerText;

            navigator.clipboard.writeText(codeContent).then(() => {
                const originalText = btn.innerHTML;
                btn.innerHTML = '<i class="ph-bold ph-check me-1"></i> Copied!';
                btn.classList.add('btn-success');
                btn.classList.remove('btn-outline-secondary');

                setTimeout(() => {
                    btn.innerHTML = originalText;
                    btn.classList.remove('btn-success');
                    btn.classList.add('btn-outline-secondary');
                }, 2000);
            }).catch(err => {
                console.error('Failed to copy: ', err);
            });
        });
    });

});
