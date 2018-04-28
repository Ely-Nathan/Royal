$(function () {
    $('#datetimepicker4').datetimepicker({
      format: 'ddd Mo MMM, YYYY',
      extraFormats: [ 'YYYY-MM-DD' ],
      locale: 'uk',
      allowInputToggle: true, // Minimum date is today's date
      minDate: new Date(), // Dont use current date when opening
      useCurrent: true
    });
});
var now = moment()
console.log(typeof moment.defineLocale)
