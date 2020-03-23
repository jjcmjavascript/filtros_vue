import moment from 'moment-timezone'
Vue.use(require('vue-moment'), {
    moment,
});

const filters = {}

filters.install = Vue => {
    Vue.filter('formatoFechaHora', function (fecha) {
        if (fecha != '-0001-11-30 00:00:00' && fecha != '-0001-11-30') {
            if (fecha && typeof fecha === 'object' && 'date' in fecha) fecha = fecha['date'];
            if (moment(fecha).isValid()) {
              return moment(fecha).tz('America/Santiago').format('DD-MM-YYYY hh:mm A');
            }
            
            return fecha;
        }

        return '';
    })
    Vue.filter('formatoFechaHoraBroken', function (fecha) {
        if (fecha != '-0001-11-30 00:00:00' && fecha != '-0001-11-30') {
            if (fecha && typeof fecha === 'object' && 'date' in fecha) fecha = fecha['date'];
            if (moment(fecha).isValid()) {
                return (
                    moment(fecha).tz('America/Santiago').format('DD-MM-YYYY') +
                    "<br />" +
                    moment(fecha).tz('America/Santiago').format('hh:mm A')
                );
            }
            
            return fecha;
        }

        return '';
    })
    Vue.filter('formatoFecha', function (fecha) {
        if (fecha != '-0001-11-30 00:00:00' && fecha != '-0001-11-30') {
            if (fecha && typeof fecha === 'object' && 'date' in fecha) fecha = fecha['date'];
            if (moment(fecha).isValid()) {
              return moment(fecha).tz('America/Santiago').format('DD-MM-YYYY');
            }
            
            return fecha;
        }

        return '';
    })
    Vue.filter('formatoAnio', function (fecha) {
        if (fecha && typeof fecha === 'object' && 'date' in fecha) fecha = fecha['date'];
        if (moment(fecha).isValid()) {
          return moment(fecha).tz('America/Santiago').format('YYYY');
        }

        return fecha;
    })
    Vue.filter('formatoMes', function (fecha) {
        if (fecha && typeof fecha === 'object' && 'date' in fecha) fecha = fecha['date'];
        if (moment(fecha).isValid()) {
          return moment(fecha).tz('America/Santiago').format('MM');
        }

        return fecha;
    })
    Vue.filter('formatoHora', function (fecha) {
        if (fecha && typeof fecha === 'object' && 'date' in fecha) fecha = fecha['date'];
        if (moment(fecha).isValid()) {
          return moment(fecha).tz('America/Santiago').format('hh:mm A');
        }

        return fecha;
    })
    Vue.filter('formatoUnixFechaHora', function (fecha) {
        if (fecha && typeof fecha === 'object' && 'date' in fecha) fecha = fecha['date'];
        if (moment.unix(fecha).isValid()) {
          return moment.unix(fecha).tz('America/Santiago').format('DD-MM-YYYY hh:mm A');
        }

        return fecha;
    })
    Vue.filter('formatoNumero', function (number) {
        if (number) {
            if (window.hasOwnProperty('Intl')){
                return new Intl.NumberFormat("de-DE").format(number);
            }
            else {
                try {
                    var numero = parseInt(number);
                }
                catch (error) {
                    var numero = number;
                }

                if (isNaN(numero)) {
                    return numero;
                }

                return numero.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
            }
        }
        return number;
    })
    Vue.filter('formatoRut', function (value) {
        var rut = value.substr(0, value.length - 1),
        dig = value.substr(-1);

        if (isNaN(rut)) {
            return value;
        }

        return rut.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + '-' + dig.toUpperCase();
    })
    Vue.filter('capitalize', function (value) {
        if (!value) return ''
        value = value.toString()
        return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
    })
    Vue.filter('uppercase', function (value) {
        if (!value) return ''
        return value.toString().toUpperCase();
    })
    Vue.filter('nl2br', function(str, is_xhtml) {
        if (str) {
            var breakTag = (is_xhtml || typeof is_xhtml === 'undefined') ? '<br />' : '<br>';
            return (str + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1' + breakTag + '$2');
        }

        return str;
    })
}

export default filters
