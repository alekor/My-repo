test('counter(a, b, c)', function () {
  equal(counter(1,2,'+'), '3', 'Operation 1+2');
  equal(counter(3,2,'/'), '1', 'Operation 3/2');
  deepEqual(counter(), 1, 'No params!');

  equal(counter('10','10','-'), '0', 'It\'s 10-10');
});