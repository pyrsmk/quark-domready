var $ = quark.$,
	$$ = quark.$$;

QUnit.test('Ready', function(assert) {
	var done = assert.async();
	assert.expect(1);
	$(function() {
		assert.ok(true);
		done();
	});
});

QUnit.start();