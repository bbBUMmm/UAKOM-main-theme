import { Controller } from '@hotwired/stimulus';

import jszip from 'jszip';
import pdfmake from 'pdfmake';
import DataTable from 'datatables.net-bs5';

export default class extends Controller {
    // https://datatables.net/forums/discussion/77339/datatables-with-zero-javascript-using-stimulus-twig-components
    /**
     * Event initialize nastane len raz.
     */
    initialize() {
        let $tableElement = $(this.element);

        // Konfiguracia zoradovania -------
        let $headerCols = $tableElement.find('thead > tr > th');
        let orders = [];
        let columnDefs = [];
        $.each($headerCols, (i, e) => {
            // ak je nastaveny atribut data-order, bude mozne usporiadat podla stlpca, inak nie.
            if (e.dataset.order !== undefined) {
                if (e.dataset.order === 'asc' || e.dataset.order === 'desc') {
                    orders.push([i, e.dataset.order]);
                }
            } else {
                columnDefs.push({
                    targets: i,
                    orderable: false
                })
            }
        });
        // --------- Konfiguracia zoradovania

        // Serverside processing -----------------
        let dataUrl = $tableElement.data('url');
        let serverSideProcessing = dataUrl !== undefined;
        let ajaxConfig = null;
        if (dataUrl !== undefined) {
            ajaxConfig = {
                url: dataUrl,
                dataSrc: 'data',
                type: "GET",
            };
        }
        // -------------------- Serverside processing

        let dt = new DataTable(this.element, {
            order: orders,
            columnDefs: columnDefs,
            serverSide: serverSideProcessing,
            ajax: ajaxConfig,
            processing: true,
            responsive: true,
            language: {
                url: "https://cdn.datatables.net/plug-ins/1.10.20/i18n/Slovak.json"
            },
            initComplete: function (settings, json) {
                $('#dataTableLoading').remove();
                $('#datatableLoaded').removeClass('d-none');
            },
            drawCallback: function(settings) {
                $('[data-toggle="tooltip"]').tooltip({boundary: 'window'});
            }
        });

    }
}