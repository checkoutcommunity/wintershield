new WOW().init();

$('#server').on('show.bs.modal', function (event) {
    $.request('onRenderServer', {
        data: {
            server_id: $(event.relatedTarget).data('server-id')
        },
        update: {
            server: '.server-modal'
        }
    });
});
