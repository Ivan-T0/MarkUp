function initializeDatepicker(fieldId, iconId) {
  var field = document.getElementById(fieldId);
  var picker = new Pikaday({
    field: field,
    onSelect: function (date) {
      field.value = picker.toString();
    },
  });

  document.getElementById(iconId).addEventListener("click", function () {
    if (picker.isVisible()) {
      picker.hide();
    } else {
      picker.show();
    }
  });

  field.addEventListener("click", function (event) {});

  document.addEventListener("click", function () {
    picker.hide();
  });
}

document.addEventListener("DOMContentLoaded", function () {
  initializeDatepicker("datepicker1", "icon1");
  initializeDatepicker("datepicker2", "icon2");
});
