$(document).ready(function() {
  $(function() {
    $('.date').datetimepicker({
      format: 'DD-MM-YYYY',
      locale: 'uk',
      allowInputToggle: true, // Minimum date is today's date
      defaultDate: new Date(),
      minDate: new Date(), 
      useCurrent: true
    });
  });

  window.setInterval(function() {
    var d1 = document.getElementById("checkInDisplay").value;
    if (d1 !== null) {
      var year = d1.substring(6, 10);
      var month = d1.substring(3, 5);
      var day = d1.substring(0, 2);
      newDate = year + "-" + month + "-" + day;
      document.getElementById("checkIn").value = newDate;
    } else {
      var today = new Date();
      var dd = today.getDate();
      var mm = today.getMonth() + 1; //January is 0!

      var yyyy = today.getFullYear();
      if (dd < 10) {
        dd = '0' + dd;
      }
      if (mm < 10) {
        mm = '0' + mm;
      }
      var today = dd + '/' + mm + '/' + yyyy;
      document.getElementById("DATE").value = today;
    }
  }, 500);

  $(document).click(function(event) {
    var clickover = $(event.target);
    var _opened = $(".navbar-collapse").hasClass("show");
    if (_opened === true && !clickover.hasClass("navbar-toggler")) {
      $(".navbar-toggler").click();
    }
  });
});
