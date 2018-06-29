/*chrome.runtime.onInstalled.addListener(function() {
  //so yeah, I don't think that an ANONYMOUS function is the place to
  //be handling display code
  chrome.storage.sync.set({color: '#3aa757'}, function() {
    console.log("God fuggin' ouah.");
  });
*/

function populateTable(table, rows, cells, content) {
    var is_func = (typeof content === 'function');
    if (!table) table = document.createElement('table');
    for (var i = 0; i < rows; ++i) {
        var row = document.createElement('tr');
        for (var j = 0; j < cells; ++j) {
            row.appendChild(document.createElement('td'));
            var text = !is_func ? (content + '') : content(table, i, j);
            row.cells[j].appendChild(document.createTextNode(text));
        }
        table.appendChild(row);
    }
    return table;
}

//should be used as such:
/*document.getElementById('tablearea')
        .appendChild(populateTable(null, 3, 2, function(t, r, c) {
                        return ' row: ' + r + ', cell: ' + c;
                     })
        );*/

