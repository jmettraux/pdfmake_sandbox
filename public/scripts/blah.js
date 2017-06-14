
// Styles, according to
// https://stackoverflow.com/questions/32291112/pdfmake-api-is-there-a-list-of-styles-fonts-capabilities
//
// ['font',
// 'fontSize',
// 'bold',
// 'italics',
// 'alignment',
// 'color',
// 'columnGap',
// 'fillColor',
// 'decoration',
// 'decorationStyle',
// 'decorationColor',
// 'background',
// 'lineHeight'
// //'tableCellPadding'
// // 'cellBorder',
// // 'headerCellBorder',
// // 'oddRowCellBorder',
// // 'evenRowCellBorder',
// // 'tableBorder'
// 'marginLeft' // self
// ]

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
      //pageMargins: [ 10, 10, 10, 10 ],
      pageMargins: [ 14, 35 ],

      styles: {},
      content: [],
    };

    // styles

    def.styles.italian = {
      italic: true, fontSize: 7 };
    def.styles.banner = {
      italic: true, fontSize: 10, marginLeft: 14, fillColor: 'blue',
      color: 'white', width: 300 };
    def.styles.pagination = {
      fontSize: 7, marginLeft: 14 };

    // header and footer

    //def.header = 'nada';

    //def.footer = [ { text: 'Glow the Value!' } ];
    def.footer = function(p, tp) {
      return [
        //{ text: 'Glow the Value', style: 'motto' },
        //{ columns: [
        //  { width: '90%', text: 'a', marginLeft: 14, style: 'motto' },
        //  { width: '*', text: 'b', style: 'motto' },
        //] },
        //'Glow the Value', style: 'motto' },
        { table: {
          widths: [ '80%', '*' ],
          body: [ [
            { text: 'Glow the Value', style: 'banner' },
            { text: 'Logo', style: 'banner' }
          ] ]
        }, layout: { defaultBorder: false }, margin: [ 13, 0 ] },
        { text: '' + p + '/' + tp, style: 'pagination' }
      ];
    };

    // content

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

    var pdf = pdfMake.createPdf(def);
    //pdf.open();
    pdf.getDataUrl(function(u) { document.getElementById('frame').src = u; });
  };

  return this;

}).apply({}); // end Blah

