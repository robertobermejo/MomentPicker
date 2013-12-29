test('basic', function() {

    var date = moment();
    var picker = $('#picker').MomentPicker();
    var header = picker.children('div.header');
    var body = picker.children('div.body');

    ok(header.length === 1, 'Has a header.');
    ok(header.length === 1, 'Has a body.');

    var next = header.children('a.next');
    var prev = header.children('a.prev');
    var current = header.children('a.current');

    ok(next.length === 1, 'Header has a next button.');
    ok(prev.length === 1, 'Header has a prev button.');
    ok(current.length === 1, 'Header has a current button.');

    var years = body.children('a');

    strictEqual(years.length, 12, 'Body has 12 years.');
    equal(years.first().text(), date.year(), 'First year is the current year.');
    equal(years.last().text(), date.year() + 11, 'Last year is 11 years after the current year.');
    ok(years.first().hasClass('current'), 'The current year has the current class.');
    strictEqual(current.text(), date.year() + ' - ' + (date.year() + 11), 'Current years shows first and last.');

    next.click();
    years = body.children('a');
    date.add('y', 12);

    strictEqual(years.length, 12, 'Body has 12 years.');
    equal(years.first().text(), date.year(), 'First year is 12 years after the current year (next clicked).');
    equal(years.last().text(), date.year() + 11, 'Last year is 23 years after the current year (next clicked).');
    ok(years.filter('.current').length === 0, 'The current year is not here.');
    strictEqual(current.text(), date.year() + ' - ' + (date.year() + 11), 'Current years shows first and last.');

    prev.click();
    years = body.children('a');
    date.subtract('y', 12);

    strictEqual(years.length, 12, 'Body has 12 years.');
    equal(years.first().text(), date.year(), 'First year is the current year (prev clicked).');
    equal(years.last().text(), date.year() + 11, 'Last year is 11 years after the current year (prev clicked).');
    ok(years.first().hasClass('current'), 'The current year has the current class.');
    strictEqual(current.text(), date.year() + ' - ' + (date.year() + 11), 'Current years shows first and last.');

    years.eq(2).click();
    var months = body.children('a');


});