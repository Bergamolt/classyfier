# classyfier

A lightweight JavaScript utility for conditionally joining class names together, taking up only 180 bytes.

## Installation

```sh
npm install classyfier

import classyfier from 'classyfier';

const className = classyfier('button', { disabled: true }, ['active', 'selected']);
// className = 'button disabled active selected'

classyfier('foo', 'bar');
// Returns: 'foo bar'

classyfier('foo', null, undefined, 'bar');
// Returns: 'foo bar'

classyfier('foo', ['bar', 'baz']);
// Returns: 'foo bar baz'

classyfier('foo', { bar: true, baz: false });
// Returns: 'foo bar'

classyfier({ foo: true }, { bar: true }, { baz: false });
// Returns: 'foo bar'

classyfier([{ foo: true, bar: false }, 'baz']);
// Returns: 'foo baz'

classyfier(['foo', { bar: true, baz: false }, null, undefined]);
// Returns: 'foo bar'
