import Vue from 'vue'

export const initMixins = () => {
  Vue.mixin({
    methods: {
      generateId() {
        let length = 8;
        let timestamp = +new Date;
        var _getRandomInt = function( min, max ) {
        return Math.floor( Math.random() * ( max - min + 1 ) ) + min;
        }
        var ts = timestamp.toString();
        var parts = ts.split( "" ).reverse();
        var id = "";
        for( var i = 0; i < length; ++i ) {
        var index = _getRandomInt( 0, parts.length - 1 );
        id += parts[index];  
        }
        return id;
      },
      getNow(value) {
        let today = new Date();
        let dd = today.getDate();
        let mm = today.getMonth()+1; //January is 0!
        let yyyy = today.getFullYear();

        let hours = today.getHours();
        let minutes = today.getMinutes();
        let seconds = today.getSeconds();
        if (hours<10) {
          hours = '0'+hours;
        }
        if (minutes<10) {
          minutes = '0'+minutes;
        }
        if (seconds<10) {
          seconds = '0'+seconds;
        }
        if(dd<10) {
            dd = '0'+dd
        } 
        if(mm<10) {
            mm = '0'+mm
        }
        let time = `${hours}:${minutes}:${seconds}`;
        today = dd + '.' + mm + '.' + yyyy;
        if (value === 'time') {
          return time;
        } else if (value === 'date') {
          return today;
        }
      },
      getParameterByName(name, url) {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
      },
      getCookie(name) {
        const escape = (s) => { 
          return s.replace(/([.*+?\^${}()|\[\]\/\\])/g, '\\$1'); 
        };
        const match = document.cookie.match(RegExp('(?:^|;\\s*)' + escape(name) + '=([^;]*)'));
        return match ? match[1] : null;
      },
      copyToClipboard(value) {
        let input = document.createElement('input');
        let result;
        input.value = value;
        document.body.appendChild(input);
        input.select();
        try {
          document.execCommand("copy");
          result = true;
        } catch (error) {
          result = false;
          console.log(error);
        }
        document.body.removeChild(input);
        return result;
      }
    }
  })
}