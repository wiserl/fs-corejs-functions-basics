import Test from 'ava';
import * as Assignment from '../src';

Test('johnnyFive exported properly', t => t.truthy(Assignment.johnnyFive));

Test('johnnyFive has a greet function', t => t.truthy(Assignment.johnnyFive.greet));

Test(`johnnyFive's greet function returns the proper greeting`, t => t.is(Assignment.johnnyFive.greet(), 'Johnny Five is Alive'));

Test(`johnnyFive's greet function takes a name parameter`, t => t.is(Assignment.johnnyFive.greet('Tyler'), `Hello, Tyler. I am Johnny 5.  I am alive!`));

Test('shout function is exported', t => t.truthy(Assignment.shout));

Test(`shout function works properly`, t => t.is(Assignment.shout('Booyah'), 'BOOYAH!!!'));

