
var Blah = (function() {

  "use strict";

  var self = this;

  // protected functions

  // public functions

  this.generatePdf = function() {

    var def = {

      pageSize: 'A4',
      pageOrientation: 'landscape',

      // [left, top, right, bottom] or [horizontal, vertical]
      // or just a number for equal margins
      pageMargins: [ 10, 10, 10, 10 ],

      styles: {},
      content: [],
    };

    def.styles.italian = { italic: true, fontSize: 7 };

    def.content.push('Hello world of pdfmake!');
    def.content.push({ text: 'an adventure', style: 'italian' });

    var table = { headerRows: 1 };
    table.widths = [ '*', 'auto', 100, '*' ];
    table.body = [];
    table.body.push([
      'First', 'Second', 'Third', '' ]);
    table.body.push([
      'Value 1', 'Value 2', 'Value 3', 'Value 4' ]);
    table.body.push([
      { text: 'Bold value', bold: true }, 'Val 2', 'Val 3', 'Val 4' ]);
    for (var i = 0; i < 100; i++) {
      table.body.push([ 'a' + i, 'b' + i, 'c' + i, 'd' + i ]);
    }
    def.content.push({ table: table });

    pdfMake.createPdf(def).open();
  };

  return this;

}).apply({}); // end Blah

