var test = require('tape').test;

test('equivalence', function(t) {
    t.equal(1, 1, 'these two numbers are equal');
    t.end();
});
test('basic arithmetic', function (t) {
    t.plan(2);

    t.equal(2 + 3, 5, 'addition');
    t.equal(7 * 8 + 9, 65, 'precedence multiplication and addition');
});
