
import { sayHello } from '../src/utils';

describe('Utils', () => {

    describe('sayHello', () => {
        it('should append name to the string Hello', () => {
            expect(sayHello('test')).toEqual('Hello test');
        });
    });

});
