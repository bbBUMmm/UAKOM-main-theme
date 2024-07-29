import { Controller } from '@hotwired/stimulus';
import {TempusDominus} from "@eonasdan/tempus-dominus";

export default class extends Controller {
    connect() {

        let format = this.element.dataset.tdFormat;

        // urcit, ci sa budu zobrazovat aj hodiny
        let showClock = false;
        if (format.match(':mm')) {
            showClock = true;
        }

        // console.log(format);
        new TempusDominus(this.element, {
            localization: {
                dayViewHeaderFormat: { month: 'long', year: 'numeric' },
                locale: 'sk',
                startOfTheWeek: 1,
                /*
                dateFormats: {
                    LTS: 'h:mm:ss T',
                    LT: 'h:mm T',
                    L: 'dd. MM. yyyy hh:mm',
                    LL: 'MMMM d, yyyy',
                    LLL: 'MMMM d, yyyy h:mm T',
                    LLLL: 'dddd, MMMM d, yyyy h:mm T'
                },
                format: 'L'
                 */
                format: format, //'dd. MM. yyyy HH:mm',
                hourCycle: 'h24'
            },
            display: {
                icons: {
                    time: 'material-icons time',
                    date: 'material-icons date',
                    up: 'material-icons up',
                    down: 'material-icons down',
                    previous: 'material-icons previous',
                    next: 'material-icons next',
                    today: 'material-icons today',
                    clear: 'material-icons delete',
                    close: 'material-icons close'
                },
                sideBySide: showClock,
                calendarWeeks: true,
                buttons: {
                    today: true,
                    clear: false,
                    close: true
                },
                components: {
                    calendar: true,
                    date: true,
                    month: true,
                    year: true,
                    decades: true,
                    clock: showClock,
                    hours: true,
                    minutes: true,
                    seconds: false
                },
            }
        });
    }
}