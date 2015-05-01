(function() {
    'use script';

    var a = ['apple', 'pear', 'banana'];
    console.log(a[0]);
    console.log(a['0']);

    a.notAnInt = 'another property';
    console.log(a.notAnInt);
})();