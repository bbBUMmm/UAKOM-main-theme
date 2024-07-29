import 'jquery';
import 'popper.js';
import 'bootstrap';

import 'src/css/app.scss'

import '/src/theme/js/ThemeSidebar';
import '/src/theme/js/ThemeFileInput';
import '/src/theme/js/ThemeInputRange';
import '/src/theme/js/ThemeCard';

global.Toast = require('/src/theme/js/ThemeToast');
export { localization } from '/src/theme/js/TempusDominusLocale/sk';
export { default as Logger } from 'src/theme/js/Logger';
